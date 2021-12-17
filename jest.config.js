module.exports = {
  roots: [
    '<rootDir>/__tests__',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '__tests__\\/.*\\.test\\.ts$',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
  ],
  globalSetup: './jest.globalSetup.js',
  resetMocks: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/helpers/'],
  testTimeout: 5000,
};
