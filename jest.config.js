module.exports = {
    // Setting the root to the actual root, since this file is in root/config
    preset: 'ts-jest',
    rootDir: '.',
    roots: ['<rootDir>/src', '<rootDir>/tests/unit'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-extended'],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        // Allow `@/` to map to `src/client/` in Jest tests
        '@/(.*)$': '<rootDir>/src/client/$1',
        '@resources/(.*)$': '<rootDir>/src/resources/$1',
        '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
}
