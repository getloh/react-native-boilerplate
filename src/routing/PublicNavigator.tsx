import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native";
import { SplashScreen } from "../ui/screens/SplashScreen";
import { AppScreen } from "../ui/constants/AppScreen";
import { screenOptions } from "./Router";


const PublicNavStack = createNativeStackNavigator();
export function PublicNavigator() {


    return (
        <>
            <StatusBar />
            <PublicNavStack.Navigator screenOptions={screenOptions}>
                <PublicNavStack.Screen name={AppScreen.Splash} component={SplashScreen} />
            </PublicNavStack.Navigator>
        </>
    )
}