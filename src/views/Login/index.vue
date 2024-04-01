<template>
  <div class="relative w-full h-full">
    <div>
      <div>登录</div>
      <div>
        <el-form :model="formData" ref="formRef">
          <el-form-item props="uersname">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const formData = reactive({
  username: '',
  password: ''
})
</script>

<style lang="scss" scoped></style>
