import React from 'react';
import ReactDOM from 'react-dom';

import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from './config/wallet';

// import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
