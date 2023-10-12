module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '@swc/jest'
  },
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
