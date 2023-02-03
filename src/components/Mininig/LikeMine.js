import { View, Text } from "react-native"
import { colors } from "../../constants"
import { Banner } from "../../screens/Ads"

const LikeMine = ()=>{
    return (
        <View style={{ margin:20}}>
            <View style={{ marginBottom: 20}}>
                <Text style={{ fontSize: 32, fontWeight: "bold", color: colors.black}}>Like others post.</Text>
                <Text style={{fontSize: 16}}>Like others post to mine more coins to create your own campaigns.</Text>
            </View>


            <Banner/>
        </View>
    )
}


export default LikeMine