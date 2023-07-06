import {DefaultTheme} from '@react-navigation/native';
import { BaseTheme } from './BaseTheme';
import { ThemeType } from './ThemeType';

export const DarkTheme : ThemeType = {
    ...BaseTheme,
    dark: true,
    colors: {
        ...BaseTheme.colors,
        bg: 'black',
        text: 'white',
        iText: 'black',
        darkText: 'black',
        lightText: 'white',
        primary: '#3B38CE',
        disabled: '#898F97',
      },
  };