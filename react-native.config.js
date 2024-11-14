module.exports = {
  assets: ['./assets/pdf/'],
  dependencies: {
    'react-native-pdf': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-pdf/android',
        },
      },
    },
  },
};
