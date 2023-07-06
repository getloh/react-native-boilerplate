import { useTheme } from "@react-navigation/native";
import Ui from "../../themes/Ui";
import { ThemeType } from "../../themes/ThemeType";
import { useState } from "react";
import { View, ViewStyle } from "react-native";



export interface containerProps{
    style?: ViewStyle;
    size?: "s";
    children?: JSX.Element | JSX.Element[];

}

export function container(props: containerProps): JSX.Element {
    const theme = useTheme() as unknown as ThemeType

    function getMargin(){
        if (props.size == "s"){
            return Ui.horMargin * 2
        }
        else {
            return Ui.horMargin
        }
    }

    return (

        <View style={{marginHorizontal: getMargin(), ...props.style}}>
            {props.children}
        </View>
    )
}