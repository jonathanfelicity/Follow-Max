import { View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { styles } from "../res"
import { colors } from "../constants"
import { Button } from "../components"



import { Banner } from "./Ads"


const CampaignScreen = ()=>{
    const handleFollowCampaign = ()=>{

    }
    return (
        <View style={ styles.container }>
            <View style={{ marginBottom: 20}}>
                <Text style={{ fontSize: 32, color: colors.black}}>Create Follow Campaign</Text>
                <Text>Growing your community, one follower at a time 🌟 Let's spread positivity and creativity together 🎨 #CreateToInspire #JoinTheCampaign 💕</Text>
            </View>

            <View style={{ marginBottom: 20}}>
            <TextInput
                    style={{ fontSize: 16, backgroundColor: colors.grey, padding: 16, borderRadius: 16, fontWeight: 'bold' }}
                    placeholder="10"
                    keyboardType="number-pad"
                />
            <Text style={{ marginVertical: 20}}>Number of Followers you want.</Text>
            <Button
                title="Buy Followers"
                onPress={() => "Hello World"}
            />
            </View>

            <Banner/>
            <Banner/>
            <Banner/>
            <Banner/>
        </View>
    )
}


export default CampaignScreen



