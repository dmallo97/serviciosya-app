/* eslint-disable global-require */
import { useState } from 'react';

import * as Font from 'expo-font';

export function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync({
      heeboLight: require('app/assets/fonts/Heebo-Light.ttf'),
      heeboRegular: require('app/assets/fonts/Heebo-Regular.ttf'),
      heeboMedium: require('app/assets/fonts/Heebo-Medium.ttf'),
      heeboBold: require('app/assets/fonts/Heebo-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  loadFontsAsync();
  return fontsLoaded;
}

export default {
  light: 'heeboLight',
  regular: 'heeboRegular',
  medium: 'heeboMedium',
  bold: 'heeboBold',
};
