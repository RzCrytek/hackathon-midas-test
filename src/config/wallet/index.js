import { InjectedConnector } from '@web3-react/injected-connector';
import Web3 from 'web3';

// const supportNetwork =[1, 3, 4, 5, 42];

const ETHEREUM_NETWORK_ID = 1;

export const connector = new InjectedConnector({
  supportedChainIds: [ETHEREUM_NETWORK_ID],
});

export const getLibrary = (provider) => {
  const library = new Web3(provider);
  return library;
};
