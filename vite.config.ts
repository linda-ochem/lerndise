import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Set the target for the final output
    target: 'modules',
    // Specify the output directory for the production build
    outDir: 'dist',
    // Enable minification for the production build
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: false,
    // Inline dynamic imports for better performance
  },
});
