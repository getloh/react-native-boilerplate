import { useTheme } from "@react-navigation/native";
import Ui from "../../themes/Ui";
import { ThemeType } from "../../themes/ThemeType";
import { useState } from "react";
import { View } from "react-native";


export interface ScreenProps{
    item?: string;
    children?: string | JSX.Element | JSX.Element[];

}

export function Screen(props: ScreenProps): JSX.Element{
    const theme = useTheme() as unknown as ThemeType

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.bg, borderColor: "red", borderWidth: 2}}>
            {props.children}
        </View>
    )
}