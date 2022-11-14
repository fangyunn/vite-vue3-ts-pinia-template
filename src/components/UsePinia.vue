<template>
  <div>
    <span>{{ userStore.name }} </span>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
setTimeout(() => {
  userStore.updateName('李四')
}, 1000)
</script>

<style lang="scss" scoped></style>
