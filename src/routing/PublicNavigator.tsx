import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native";
import { SplashScreen } from "../ui/screens/SplashScreen";
import { AppScreen } from "../ui/constants/AppScreen";


const PublicNavStack = createNativeStackNavigator();
export function PublicNavigator() {


    return (
        <>
            <StatusBar />
            <PublicNavStack.Navigator>
                <PublicNavStack.Screen name={AppScreen.Splash} component={SplashScreen} />
            </PublicNavStack.Navigator>
        </>
    )
}