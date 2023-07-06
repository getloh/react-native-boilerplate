import { useTheme } from "@react-navigation/native";
import Ui from "../../themes/Ui";
import { ThemeType } from "../../themes/ThemeType";
import { useState } from "react";
import { View } from "react-native";


export interface SpacerProps{
    item?: string;
    children?: string | JSX.Element | JSX.Element[];

}

export function Spacer(props: SpacerProps){
    const theme = useTheme() as unknown as ThemeType

    return (
        <>
            <View 
                style={{height: Ui.spacer}}
            />
        </>
    )
}