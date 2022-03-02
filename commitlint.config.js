module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-case': [0],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  }
};
