import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    define: {
        global: 'window', // needed by emoji-picker-react
    },
    preview: {
        port: 3000,
    },
})
