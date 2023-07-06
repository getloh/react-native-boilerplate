import { useTheme } from "@react-navigation/native";
import Ui from "../themes/Ui";
import { ThemeType } from "../themes/ThemeType";
import { useState } from "react";


export interface templateProps{
    item?: string;
    children?: string | JSX.Element | JSX.Element[];

}

export function template(props: templateProps){
    const theme = useTheme() as unknown as ThemeType

    return (
        <>
        
        </>
    )
}