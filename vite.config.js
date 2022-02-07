import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    events: require.resolve('events'),
  },
  alias: {
    http: require.resolve('rollup-plugin-node-builtins'),
    stream: require.resolve('rollup-plugin-node-builtins'),
    url: require.resolve('rollup-plugin-node-builtins'),
  },
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
});
