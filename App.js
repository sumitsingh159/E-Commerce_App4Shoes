import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/router';

export default function App() {
  
  // Loading the custom font
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="light" backgorunColor="#000" translucent={true} />
        <Routes />
      </>
    );
  }

}