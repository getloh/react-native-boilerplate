import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native";
import { SplashScreen } from "../ui/screens/SplashScreen";
import { AppScreen } from "../ui/constants/AppScreen";
import { screenOptions } from "./Router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./HomeNavigator";
// import { templateScreen } from "../ui/screens/templateScreen";
// import { templateScreen2 } from "../ui/screens/templateScreen2";

const PrivateNavStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function PrivateNavigator()
{


    return (
        <>
            <StatusBar />
            {/* <PrivateNavStack.Navigator screenOptions={screenOptions}> */}
                {/* <PrivateNavStack.Screen name={AppScreen.Splash} component={SplashScreen} /> */}
                <Tab.Navigator>
                    <Tab.Screen name={AppScreen.HomeTab} component={HomeNavigator} />
                    <Tab.Screen name={AppScreen.Settings} component={SplashScreen} />
                </Tab.Navigator>
            {/* </PrivateNavStack.Navigator> */}
        </>
    )
}