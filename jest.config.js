module.exports = {
    silent: false,
    verbose: true,
    clearMocks: true,
    coverageDirectory: 'coverage-jest',
    testRegex: '((\\.|/)(test|spec))\\.[jt]sx?$',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/vendor/',
        '/public/',
        '/dist/',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/src/__tests__/test-dist/',
        '<rootDir>/webpack/',
    ],
};