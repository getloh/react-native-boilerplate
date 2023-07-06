import {DefaultTheme} from '@react-navigation/native';
import { BaseTheme } from './BaseTheme';

export const LightTheme = {
    ...BaseTheme,
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
      },
  };