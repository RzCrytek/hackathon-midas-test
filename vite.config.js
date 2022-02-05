import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    events: require.resolve('events'),
  },
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
});
