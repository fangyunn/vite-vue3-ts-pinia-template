import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果找不到path模块或其相对应的类型声明 输入命令 pnpm install @types/node --save-dev
import path from 'path'

export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
    }
  },
  plugins: [vue()]
})
