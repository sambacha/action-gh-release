module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
   '^.\\.ts$': [
   ["ts-jest",  { tsconfig: './tsconfig.jest.json' }],
      			{
      				// Note: We shouldn't need to include `isolatedModules` here because it's a deprecated config option in TS 5,
      				// but setting it to `true` fixes the `ESM syntax is not allowed in a CommonJS module when
      				// 'verbatimModuleSyntax' is enabled` error that we're seeing when running our Jest tests.
      				isolatedModules: true,
      				useESM: true,
      			},
      		],
  },
  verbose: true
}