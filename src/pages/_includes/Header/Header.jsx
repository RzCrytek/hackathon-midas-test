import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';

import './Header.scss';

import LogoMidasTest from '/src/images/logo-midastest.svg';
import LogoMetaMask from '/src/images/logo-metamask.svg';

const Header = () => {
  const { active, connectWallet, disconnectWallet, account } = useAuthContext();
  console.log('account:', account);
  return (
    <header id="header">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">test1</Link>
        </li>
        <li>
          <Link to="/test/demo2">test2</Link>
        </li>
        <li>
          <Link to="/test/demo3">test3</Link>
        </li>
      </ul> */}
      <div className="container">
        <Link className="logo" to="/">
          <img src={LogoMidasTest} alt="MidasTest" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="#!">Home</Link>
            </li>
            <li>
              <Link to="#!">Test world</Link>
            </li>
            <li>
              <Link to="#!">Contract</Link>
            </li>
            <li>
              <Link to="#!">Help center</Link>
            </li>

            {account && (
              <li>
                <Link to="/app">TEST</Link>
              </li>
            )}
          </ul>

          {active ? (
            <button className="btn btn-connect" onClick={disconnectWallet}>
              Desconectar
              <img src={LogoMetaMask} alt="Logo MetaMask" />
            </button>
          ) : (
            <button className="btn btn-connect" onClick={connectWallet}>
              Connect with
              <img src={LogoMetaMask} alt="Logo MetaMask" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
