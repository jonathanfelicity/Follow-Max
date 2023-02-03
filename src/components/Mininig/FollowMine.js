import { View, Text, Image, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors } from "../../constants"
import { Banner } from "../../screens/Ads"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
const DIAMETER = 50

const FollowMine = () => {
    const { follow } = useContext(UserContext)
    return (
        <View style={{ margin: 20, flex: 1, }}>
            <View style={{ marginBottom: 20}}>
                <Text style={{ fontSize: 32, fontWeight: "bold", color: colors.black}}>Follow others account.</Text>
                <Text style={{fontSize: 16}}>Follow other account to mine more coins to create your own campaigns.</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[{ height: DIAMETER + 5, width: DIAMETER + 5, borderRadius: DIAMETER + 5 / 2, borderWidth: 1, justifyContent: "center", alignItems: "center" }]}>
                        <Image source={{ uri: 'https://picsum.photos/200' }} style={[{ height: DIAMETER, width: DIAMETER, borderRadius: DIAMETER / 2 }]} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "bold", color: colors.black, fontSize: 16 }}>John Doe</Text>
                        <Text>johndoe</Text>
                    </View>
                </View>


                <TouchableOpacity style={{ padding: 10, backgroundColor: colors.yellow, borderRadius: 20 }} onPress={follow}>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', color: colors.black }}>Follow</Text>
                </TouchableOpacity>
            </View>
            <Banner/>
        </View>
    )
}


export default FollowMine