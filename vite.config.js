import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    events: require.resolve('events'),
  },
  alias: {
    web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
  },
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
});
