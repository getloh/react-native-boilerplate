import {DefaultTheme} from '@react-navigation/native';
import { ThemeType } from './ThemeType';

export const BaseTheme: ThemeType = {
    ...DefaultTheme,
    font: {
        fontFamily: "sans-serif-light",
        xxs: 6,
        xs: 8,
        sm: 10,
        md: 14,
        lg: 18,
        xl: 24,
        xxl: 28,
        xxxl: 32,
        xxxxl: 36,
    },
    colors:{
        text: "#000000",
        iText: "#FFFFFF",
        lightText: "#E6E6E8",
        darkText: "#000000",

        bg: "#FFF",
        surface: "#777777",
        accent: "#525151",
        outline: "#FFF",

        disabled: "#4c4c4c",
        placeholder: "#585858",
        notification: "#FFF",

        primary: "#000dc8",
        secondary: "#0d80ad",
        tertiary: "#00dfdf",

        error: "#560000",
        warning: "#734d00",
        critical: "#c90000"
    }
}