module.exports = {
  printWidth: 80, // 一行最多字符
  tabWidth: 2, // 缩进
  useTabs: false, // 不使用tab缩进,而使用空格
  semi: false, // 行尾是否需要分号
  singleQuote: true, //单引号
  quoteProps: 'as-needed', // 对象的key仅在必要时需要引号
  jsxSingleQuote: false, // jsx不使用单引号
  bracketSpacing: true, // 大括号首尾需要空格
  arrowParens: 'always', // 箭头函数只有一个参数的时候也需要括号
  // 每个文件格式化的单位是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  proseWrap: 'preserve', // 使用默认的折行标准
  htlmWhitespaceSensitivity: 'css', // 根据显式样式决定html要不要折行
  endOfLine: 'auto', // 换行符使用lf
  trailingComma: 'none'
}
