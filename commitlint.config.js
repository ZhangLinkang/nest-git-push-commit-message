/**
 * feature：新功能
 * update：更新某功能
 * fixbug：修补某功能的bug
 * refactor：重构某个功能
 * optimize: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 */
module.exports = {
  extends: ['@commitlint/config-angular'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'type-case': [0],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '📦build',
        '👷ci',
        '📝docs',
        '✨feat',
        '🐛fix',
        '🚀perf',
        'refactor',
        '🔂revert',
        '💎style',
        '🚨test'
      ]
    ],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  }
};
