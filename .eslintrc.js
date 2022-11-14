module.exports = {
  parser: 'vue-eslint-parser', // 解析器: 由于eslint默认使用espree进行语法解析,无法识别ts的一些语法,需要安装@typescript-eslint/parser替代默认的解析器,对应的插件@typescript-eslint/eslint-plugin作为eslint默认规则的补充
  // 指定解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // 启用es6语法,但不会自动启用es6的全局变量
    sourceType: 'module', // script(默认) | module

    // 表示你想使用哪些额外的语言特性的对象
    ecmaFeatures: {
      jsx: true // 启用jsx
      // globalReturn :true //允许全局范围内的return语句
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  rules: {}
}
