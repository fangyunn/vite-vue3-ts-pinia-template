import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user', // id必填且唯一
  state: () => {
    return { name: '张三' }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})
