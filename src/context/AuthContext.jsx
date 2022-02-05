import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/wallet';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { active, account, library, activate, deactivate, error, chainId } =
    useWeb3React();

  const connectWallet = useCallback(async () => {
    const { ethereum } = window;
    if (!ethereum) return alert('valida si tienes instalado metaMask');

    try {
      await activate(connector);
      localStorage.setItem('isConnected', true);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }, [activate]);

  const disconnectWallet = async () => {
    try {
      deactivate();
      localStorage.removeItem('isConnected');
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isConnected') === 'true') {
      connectWallet();
    }
  }, [connectWallet]);

  if (error) {
    console.log('error useWeb3React:', error);
  }

  const value = {
    isAuthenticated,
    connectWallet,
    disconnectWallet,
    active,
    account,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};
