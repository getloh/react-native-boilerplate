import { View } from "react-native";
import Button from "../components/Button";
import { Spacer } from "../components/base/Spacer";
import { Chip } from "../components/Chip";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "../themes/ThemeType";



export function SplashScreen() {
    const theme = useTheme() as unknown as ThemeType


    return (
        <View style={{backgroundColor: theme.colors.bg}}>
            <Button 
            onPress={() => console.log("Test")}
            text="Test"
            >
            
            </Button>
            <Spacer />
            <View style={{flexDirection: "row"}}>
            <Chip onPress={()=>{}}/>

            </View>
        </View>
    )
}