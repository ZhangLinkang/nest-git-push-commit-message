## 项目介绍

使用`Nest.js`作为基础框架，主要实现GIT将代码推送至远程仓库后，触发Webhooks钩子，将提交信息处理后发送本程序进行格式处理后，再将处理后的数据发给`WebHooks机器人`，机器人将提交信息发送至（钉钉，企业微信等）工作群中

## 开发环境

node v14

## 贡献说明

本项目已加入commitlint提交信息校验，请遵循angular提交规范

https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit

**提交示例**

```
fix:(repayment): 修复还款利息计算错误
fix:(还款管理): 修复还款利息计算错误
perf:(生成管理): 添加报表带出功能
style:(仪表盘): 修改数据显示布局
```
