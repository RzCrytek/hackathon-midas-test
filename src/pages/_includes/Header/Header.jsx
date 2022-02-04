import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import LogoMetaMask from '/src/images/logo-metamask.svg';

const Header = () => {
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
        <Link className="logo" to="#!">
          MIDASTEST
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
          </ul>

          <button className="btn btn-connect">
            Connect with
            <img src={LogoMetaMask} alt="Logo MetaMask" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
