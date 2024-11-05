import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.REACT_APP_TREFLE_API_TOKEN;



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __API_URL__: JSON.stringify(apiKey),
    __API_KEY__: JSON.stringify(apiKey),
  },
})


