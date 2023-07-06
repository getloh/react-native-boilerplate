import { Text, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeType } from '../../themes/ThemeType';

export interface ParagraphProps
{
    style?: TextStyle;
    bold?: boolean;
    children?: string | string[];
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    invert?: boolean;
}

const Paragraph = (props: ParagraphProps) =>
{
    const theme = useTheme() as unknown as ThemeType

    function getFontSize()
    {

        switch (props.size)
        {
            case "2xs":
                return theme.font.xxs
            case "xs":
                return theme.font.xs
            case "sm":
                return theme.font.sm
            case "md":
                return theme.font.md
            case "lg":
                return theme.font.lg
            case "xl":
                return theme.font.xl
            case "2xl":
                return theme.font.xxl
            case "3xl":
                return theme.font.xxxl
            default:
                return theme.font.md
        }
    }

    return (
        <Text
            style={{
                fontFamily: theme.font.fontFamily,
                fontWeight: props.bold ? "bold" : "normal",
                fontSize: getFontSize(),
                color: props.invert ? theme.colors.iText : theme.colors.text,
                ...props.style
            }}>
            {props.children}
        </Text>
    )
}

export default Paragraph