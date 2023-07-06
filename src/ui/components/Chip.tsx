import { useState } from "react";
import Button from "./Button";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "../themes/ThemeType";

export interface chipProps{
    active?: boolean;
    onPress: Function;
    children?: string | JSX.Element | JSX.Element[];
    
}

export function Chip(props: chipProps) {

    const theme = useTheme() as unknown as ThemeType

    return (
        <Button
            onPress={props.onPress}
            style={{
                paddingLeft: 10,
                borderColor: theme.colors.disabled
            }}
            textStyle={{color: theme.colors.disabled}}
            text={"Test"}
            outline
        >


        </Button>
    )
}