import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ethers } from "ethers";

// import { useWeb3React } from '@web3-react/core';
// import { connector } from '../config/wallet';
import { CONTRACT_ADDRESS } from '../utils/constants/constants';
import midasTest from "../utils/json/MidasTest.json"

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const { active, account, library, activate, deactivate, error, chainId } =
  //   useWeb3React();

  // const connectWallet = useCallback(async () => {
  //   const { ethereum } = window;
  //   if (!ethereum) return alert('valida si tienes instalado metaMask');

  //   try {
  //     await activate(connector);
  //     localStorage.setItem('isConnected', true);
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [activate]);

  // const disconnectWallet = async () => {
  //   try {
  //     deactivate();
  //     localStorage.removeItem('isConnected');
  //     setIsAuthenticated(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('isConnected') === 'true') {
  //     connectWallet();
  //   }
  // }, [connectWallet]);

  // if (error) {
  //   console.log('error useWeb3React:', error);
  // }

  const [currentAccount, setCurrentAccount] = useState(null);
  const [userData, setUserData] = useState(null);

  const checkIfWalletIsConnected = async () => {
    const {ethereum} = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({method: 'eth_accounts'});

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authrized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found!");
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({method: "eth_requestAccounts"});

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const getUserData = async () => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, midasTest.abi, signer);

        const obtainedData = await connectedContract.getUserInfo(currentAccount);

        console.log(obtainedData);

        setUserData(obtainedData);

        console.log("Done!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  useEffect(() => {
    if (currentAccount !== null) {
      getUserData();
    }
  }, [currentAccount]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on(
        'accountsChanged', () => {
          window.location.reload();
        }
      )
    }
  })

  const value = {
    connectWallet,
    getUserData,
    userData,
    currentAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};
