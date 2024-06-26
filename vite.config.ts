import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 如果找不到path模块或其相对应的类型声明 输入命令 pnpm install @types/node --save-dev
import path from 'path'

export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],

  // 开发服务器选项
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true, // boolean | string 在服务器启动时自动在浏览器中打开应用程序

    // 为开发服务器配置自定义代理规则 对象key值以^开头,将会被解释为RegExp
    proxy: {
      '/api': {
        target: '你要调的后端接口地址',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
