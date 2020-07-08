import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Navigation from './src/routes';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  useEffect(()=> {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    };
    loadFonts();
  });
    
  return(
    <Navigation />
  );
};

export default App;