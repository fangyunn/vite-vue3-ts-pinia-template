import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { basicRoute } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  // RouteRecordRaw 是路由配置信息类型
  routes: basicRoute as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true
})

export default router
