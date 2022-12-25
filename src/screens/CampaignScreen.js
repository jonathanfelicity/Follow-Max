import { View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { styles } from "../res"
import { colors } from "../constants"
import { Button } from "../components"



const CampaignScreen = ()=>{
    return (
        <View style={ styles.container }>
            <Text style={{ fontSize: 32}}>Create Campaign</Text>

            <TextInput
                    style={{ fontSize: 16, backgroundColor: colors.grey, padding: 16, borderRadius: 16, fontWeight: 'bold', marginBottom: 20 }}
                    placeholder="10"
                    keyboardType="number-pad"
                />
            <Text>Number of Followers you want.</Text>
            <Button
                title="Buy Followers"
                onPress={() => "Hello World"}
            />
        </View>
    )
}


export default CampaignScreen