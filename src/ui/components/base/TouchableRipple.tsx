import React, { useState } from "react";
import { View, ViewStyle, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { useTheme } from '@react-navigation/native';
import { ThemeType } from "../../themes/ThemeType";

export interface TouchableRippleProps
{
    style?: ViewStyle | ViewStyle[];
    onPress?: Function;
    onPressIn?: Function;
    onPressOut?: Function;
    onLongPress?: Function;
    rippleColor?: string;
    borderless?: boolean;
    disabled?: boolean;
    children: React.ReactNode
}

const TouchableRipple = (props: TouchableRippleProps) =>
{

    const theme = useTheme() as unknown as ThemeType

    const opacitySpeedMs = 100;
    const animationSpeedMs = 100;
    const size = 1000;

    const [animationPosition, setAnimationPosition] = useState(new Animated.Value(0));
    const [animationOpacity, setAnimationOpacity] = useState(new Animated.Value(0));

    function onPressIn()
    {
        Animated.parallel([
            Animated.timing(animationOpacity, {
                toValue: 1,
                duration: opacitySpeedMs,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(animationPosition, {
                toValue: 1,
                duration: animationSpeedMs,
                easing: Easing.linear,
                useNativeDriver: true
            }),

        ]).start();

        if (props.onPressIn)
        {
            props?.onPressIn();
        }
    }

    function onPressOut()
    {
        Animated.sequence([
            Animated.timing(animationOpacity, {
                toValue: 0,
                duration: opacitySpeedMs * 2,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(animationPosition, {
                toValue: 0,
                duration: animationSpeedMs,
                easing: Easing.linear,
                useNativeDriver: true
            }),
        ]).start();

        if (props.onPressOut)
        {
            props?.onPressOut();
        }
    }

    let propStyles = {};
    if (Array.isArray(props.style))
    {
        for (let i = 0; i < props.style.length; i++)
        {
            propStyles = { propStyles, ...props.style[i] };
        }
    }
    else
    {
        if (props.style){
            propStyles = props?.style;
        }
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPress={props.onPress?.bind(this)}
            onLongPress={props.onLongPress?.bind(this)}
            onPressOut={onPressOut}
        >
            <View
                style={{
                    overflow: "hidden",
                    ...propStyles
                }}
            >
                {props.children}

                <Animated.View
                    style={{
                        position: "absolute",
                        top: -size / 2, left: -size / 2,
                        opacity: animationOpacity,
                        height: size, width: size,
                        borderRadius: 500,
                        backgroundColor: props.rippleColor ? props.rippleColor : "rgba(0,0,0,0.15)",
                        transform: [{ scale: animationPosition }],
                    }}
                />

            </View>
        </TouchableWithoutFeedback>
    );
}

export default TouchableRipple