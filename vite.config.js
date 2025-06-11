import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@iconos': path.resolve(__dirname, './public/iconos'),
      '@banners': path.resolve(__dirname, './public/banners'),
	'@': path.resolve(__dirname, './src'),

    },
  },
});
