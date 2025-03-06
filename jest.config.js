/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  // transform: {
  //   "^.+.tsx?$": ["ts-jest",{}],
  // },
};