const expoPreset = require('jest-expo/jest-preset');
// eslint-disable-next-line import/order

const setupFiles = [
  ...expoPreset.setupFiles,
  './node_modules/react-native-gesture-handler/jestSetup.js',
];

module.exports = {
  verbose: true,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/App.js',
    '!**/coverage/**',
    '!**/hooks/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/jest.config.js',
    '!**/AxiosConfig.js',
    '!**/storybook/**',
    '!**/models/root.js',
    '!**/models/Middlewares.js',
    '!**/navigation/**',
    '!**/metro.config.js',
    '!**/index.js',
    '!**/Env.js',
    '!**/tests/**',
    '!**/components/svgs/**',
    '!**/styles/**',
    '!**/PhotoServices.js',
    '!**/IsExpo.js',
    '!**/ExpoBleSelectContainer.js',
  ],
  setupFiles,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  clearMocks: true,
};
