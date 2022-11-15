module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // 新功能
        'fix', // 修改bug
        'ui', // 更新ui
        'docs', // 更新文档
        'style', // 格式(不影响代码运行的变动)
        'perf', // 优化相关,比如提升性能,优化体验
        'release', // 发布
        'deploy', // 部署
        'refactor', // 重构(既不增加feature,也不是修复bug)
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动(更改配置文件)
        'revert', // 撤销之前的commit
        'merge', // 分支合并
        'build', // 打包
        'sync' // 同步主线或分支的bug
      ]
    ],
    'type-case': [2, 'always', 'lower-case'], // 格式 小写
    'type-empty': [2, 'never'], // type不能为空
    'scope-empty': [2, 'never'], // 范围不能为空
    'scope-case': [0], // 范围格式
    'subject-empty': [2, 'never'], // 主要message不能为空
    'subject-full-stop': [0, 'never'], // 以什么为结束标志,禁用
    'subject-case': [0, 'never'], // 格式 禁用
    'body-leading-blank': [1, 'always'], // 以空行开头
    'header-max-length': [0, 'always', 72]
  }
}
