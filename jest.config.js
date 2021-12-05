module.exports = async () => {
  return {
    verbose: true,
    transform: { "\\.(js|jsx|ts|tsx)$": "@sucrase/jest-plugin" },
  };
};
