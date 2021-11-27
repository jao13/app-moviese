import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import MainStack from './src/routes/MainStack';

import UserContextProvider from './src/contexts/UserContext';

import { theme } from './src/global/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <UserContextProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={theme.colors.secondary} style="dark" />
            <MainStack />
          </SafeAreaView>
        </UserContextProvider>
      </NavigationContainer>
    );
  }
}
