require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/projects/telescope-extension/src/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/projects/telescope-extension/e2e/']
};
