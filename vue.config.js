const { defineConfig } = require('@vue/cli-service')
const SentryPlugin = require('webpack-sentry-plugin') 


module.exports = defineConfig({
  productionSourceMap: true,
  transpileDependencies: true,
  configureWebpack: (config) => { // 扩展webpack插件配置
    const projectName = ''
    const sentry = new SentryPlugin({
      organization: '', // 组织名称 
      project: projectName, // 项目名称
      apiKey: '', // key 值
      release(hash) { // release版本
        return 'test-v6'
      },
      baseSentryURL: '', // 配置指到我们的自建服务器，api/0 是固定
      include: /\.map$/   //正则，匹配哪些文件上传
    })
    config.plugins.push(sentry) // 添加到webpack插件中
  }
})
