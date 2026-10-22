import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
      include: '**/*.svg',
    }),
  ],
  server: {
    port: 3000,
  },
  define: {
    'process.env': {},
  },
});
