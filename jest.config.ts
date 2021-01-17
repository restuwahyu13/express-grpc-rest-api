import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	testMatch: ['<rootDir>/test/**/*.{test.ts, spec.ts}', '<rootDir>/__tests__/**/*.{test.ts, spec.ts}'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: ['src/**/*'],
	testPathIgnorePatterns: ['node_modules/', 'dist/', 'tsconfig.json', 'coverage/'],
	coveragePathIgnorePatterns: ['node_modules/', 'dist/', 'tsconfig.json', 'coverage/']
}

export default config
