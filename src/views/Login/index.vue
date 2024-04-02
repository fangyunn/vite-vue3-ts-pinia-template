<template>
  <div class="relative w-full h-full flex justify-center items-center">
    <div class="w-1/2 bg-blue-300 p-2">
      <div class="text-center">后台管理系统</div>
      <div>
        <el-form :model="ruleForm" ref="ruleFormRef" :rules="rules">
          <el-form-item prop="username" label="账号">
            <el-input placeholder="情输入账号" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input placeholder="情输入密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="hanldeLogin(ruleFormRef)" type="primary" class="w-full"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
  username: ''
  password: ''
}
const ruleForm = reactive<RuleForm>({
  username: '',
  password: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})
const ruleFormRef = ref<FormInstance>()
const hanldeLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    console.log('valid', valid)
    if (valid) {
      console.log('valid success')
    } else {
      console.log('valid error', fields)
    }
  })
}
</script>

<style lang="scss" scoped></style>
