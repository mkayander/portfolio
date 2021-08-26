module.exports = {
    name: "client",
    // preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
    rootDir: "./",
    testEnvironment: "jsdom",
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    moduleNameMapper: {
        "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,
    },
};
