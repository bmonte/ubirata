module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      isolatedModules: true,
    },
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['<rootDir>/src/components/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(svg|gif)$': '<rootDir>/src/__tests__/mocks/svgrMock.ts',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__tests__/mocks/styleMock.ts',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '__tests__/test-utils.tsx',
    '__tests__/mocks/*',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
