import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native";
import { SplashScreen } from "../ui/screens/SplashScreen";
import { AppScreen } from "../ui/constants/AppScreen";
import { screenOptions } from "./Router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TemplateScreen } from "../ui/screens/templateScreen";
import { TemplateScreen2 } from "../ui/screens/templateScreen2";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeNavigator()
{


    return (
        <>
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen name={AppScreen.Home} component={TemplateScreen}/>
            <HomeStack.Screen name={AppScreen.Settings} component={TemplateScreen2}/>

        </HomeStack.Navigator>
            {/* <PrivateNavStack.Navigator screenOptions={screenOptions}> */}
                {/* <PrivateNavStack.Screen name={AppScreen.Splash} component={SplashScreen} /> */}
                    {/* <Tab.Screen name={AppScreen.Home} component={templateScreen} />
                    <Tab.Screen name={AppScreen.Settings} component={templateScreen2} /> */}
            {/* </PrivateNavStack.Navigator> */}
        </>
    )
}