import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native";
import { SplashScreen } from "../ui/screens/SplashScreen";
import { AppScreen } from "../ui/constants/AppScreen";


const PrivateNavStack = createNativeStackNavigator();
export function PrivateNavigator() {


    return (
        <>
            <StatusBar />
            <PrivateNavStack.Navigator>
                <PrivateNavStack.Screen name={AppScreen.Splash} component={SplashScreen} />
            </PrivateNavStack.Navigator>
        </>
    )
}