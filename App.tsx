import React from 'react';
import type { PropsWithChildren } from 'react';
import
{
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './src/ui/screens/SplashScreen';
import { DarkTheme } from './src/ui/themes/DarkTheme';
import { LightTheme } from './src/ui/themes/LightTheme';
import { ThemeType } from './src/ui/themes/ThemeType';
import { AppScreen } from './src/ui/constants/AppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/routing/Router';
import Toast from 'react-native-toast-message'


function App(): JSX.Element
{
  
  // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
    const isDarkMode = useColorScheme() === 'dark';
    let theme: ThemeType = true ? DarkTheme : LightTheme;
    
    const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>

      <Router />
    <Toast />
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
