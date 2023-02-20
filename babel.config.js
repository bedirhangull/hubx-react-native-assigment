module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('react-native-dotenv'),
      {
        moduleName: "react-native-dotenv",
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc', 
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          "@pages": "./src/pages",
          "@components": "./src/components/index",
          "@config": "./src/config",
          "@assets": "./src/assets/index",
          "@utils": "./src/utils/index",
          "@store": "./src/store/index",
          "@theme": "./src/theme/theme",
          "@slices": "./src/store/slices/*",
          "@services": "./src/slices/services/index",
          "@global": "./src/components/common_styled_components/index",
        }
      }
    ],
    'jest-hoist'
  ]
};
