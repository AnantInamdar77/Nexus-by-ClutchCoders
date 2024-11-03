import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({ 
  plugins: [react()], 
  resolve: { 
    alias: { 
      'lucide-react': 'lucide-react/dist/cjs/lucide-react.js',
     }, 
    },
   });