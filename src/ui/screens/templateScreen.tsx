import { useNavigation } from "@react-navigation/native";
import Paragraph from "../components/base/Paragraph";
import { Screen } from "../components/base/Screen";
import Button from "../components/Button";
import { AppScreen } from "../constants/AppScreen";


export function TemplateScreen(){

    const navigation = useNavigation();

    return(

        <Screen>
            <Paragraph>
                Test paragraph
            </Paragraph>
            <Button 
            onPress={ () => {navigation.navigate(AppScreen.Settings)}}
                text="Go!"
            />
        </Screen>
    )
}