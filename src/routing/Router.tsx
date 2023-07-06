import React from 'react';
import type { PropsWithChildren } from 'react';
import{  useColorScheme,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme } from '../ui/themes/DarkTheme';
import { LightTheme } from '../ui/themes/LightTheme';
import { ThemeType } from '../ui/themes/ThemeType';
import { PrivateNavigator } from './PrivateNavigator';
import { PublicNavigator } from './PublicNavigator';

export const screenOptions = {
    headerShown: false,
    headerTitle: "",
    headerTintColor: "black",
    headerShadowVisible: false,
    headerBackTitle: " Back", // Purposely with a space,
  }

function Router(): JSX.Element
{
  
  // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
    const isDarkMode = useColorScheme() === 'dark';
    let theme: ThemeType = true ? DarkTheme : LightTheme;
    
    const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer theme={theme}>
      {true ? <PrivateNavigator/> : <PublicNavigator />}
    </NavigationContainer>
  );
}

export default Router;
