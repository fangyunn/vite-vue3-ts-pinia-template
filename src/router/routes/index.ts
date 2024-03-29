import { RouteRecordRaw } from 'vue-router'

export const LoginRoute: RouteRecordRaw = {
  path: '/',
  name: 'Login',
  meta: {
    title: '登录',
    keepAlive: true,
    requireAuth: false
  },
  component: () => import('@/views/Login/index.vue')
}

export const basicRoute = [LoginRoute]
