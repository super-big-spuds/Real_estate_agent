import {  defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import react from '@vitejs/plugin-react-swc'
export default defineConfig((command)=>{
  return {
    plugins: [
      react(),
      viteMockServe({
        mockPath: './src/mock/',
        localEnabled: command.command === 'serve',
        prodEnabled: command.command !== 'serve' ,
        supportTs: true,
        watchFiles: true,
      }),
    ],
  }
})