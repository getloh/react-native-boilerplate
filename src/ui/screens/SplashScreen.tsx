import { View } from "react-native";
import Button from "../components/Button";
import { Spacer } from "../components/base/Spacer";
import { Chip } from "../components/Chip";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "../themes/ThemeType";
import Toast from 'react-native-toast-message'

export function SplashScreen() {
    const theme = useTheme() as unknown as ThemeType


    return (
        <View style={{backgroundColor: theme.colors.bg}}>
            <Button 
            onPress={() => {Toast.show({type: 'info', text1:"This is a test"})}}
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