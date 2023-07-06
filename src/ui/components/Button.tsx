import React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import Ui from '../themes/Ui';
import { useTheme } from '@react-navigation/native';
import { ThemeType } from '../themes/ThemeType';
import TouchableRipple from './base/TouchableRipple';
import Paragraph from './base/Paragraph';

export interface ButtonProps
{
    onPress: Function;
    style?: ViewStyle;
    children?: React.ReactNode;
    text?: string;
    textStyle?: TextStyle;
    outline?: boolean;
    slim?: boolean;
    disabled?: boolean;
}

/**    onPress: Function;
    style?: ViewStyle;
    children?: React.ReactNode;
    text?: string;
    textStyle?: TextStyle;
    outline?: boolean;
    slim?: boolean;
    disabled?: boolean; */
const Button = (props: ButtonProps) =>
{
    const theme = useTheme() as unknown as ThemeType

    function onPress(){

        if (props.disabled !== true){
            props.onPress()
        }
    }

    return (
        <TouchableRipple
            style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: Ui.borderRadius,
                backgroundColor: props.outline ? "rgba(0,0,0,0)" : theme.colors.primary,
                flexDirection: "row",
                paddingLeft: Ui.button.paddingHor,
                paddingRight: Ui.button.paddingHor,
                paddingVertical: props.slim? Ui.button.paddingVerSlim : Ui.button.paddingVer,

                borderWidth: 2,
                borderColor: props.outline ? theme.colors.text : theme.colors.primary,
                opacity: props.disabled ? 0.5 : 1,
                ...props.style
            }}
            onPress={onPress}
        >
            {props.children}
            {props.text &&
                <Paragraph
                    style={{
                        fontWeight: "bold",
                        color: props.outline? theme.colors.text : theme.colors.lightText,
                        ...props.textStyle
                    }}>
                    {props.text.toUpperCase()}
                </Paragraph>}
        </TouchableRipple>
    )
}
export default Button