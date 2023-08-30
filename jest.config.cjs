module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
    },
};