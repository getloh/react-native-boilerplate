

export interface ThemeType  {
    dark: boolean;
    font: {
        fontFamily: string;
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
        xxxxl: number;
    }
    colors: {
        text: string;
        iText: string;         // inverted colour
        lightText: string;
        darkText: string;

        bg: string;
        surface: string;
        accent: string;
        outline: string;

        disabled: string;
        placeholder: string;
        notification: string;
        
        primary: string;
        secondary: string;
        tertiary: string;

        error: string;
        warning: string;
        critical: string;
    }
}