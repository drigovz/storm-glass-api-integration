const { resolve } = require('path'),
  root = resolve(__dirname, '..'),
  rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    testMatch: ['<rootDir>/test/**/*.test.ts'],
  },
};
