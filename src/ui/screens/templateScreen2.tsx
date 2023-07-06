import Paragraph from "../components/base/Paragraph";
import { Screen } from "../components/base/Screen";
import { View } from "react-native";

export function TemplateScreen2(){

    return(

        <Screen>
            <View style={{flex: 1, backgroundColor: "blue"}}>

            <Paragraph>
                Test page 2
            </Paragraph>
            </View>
        </Screen>
    )
}