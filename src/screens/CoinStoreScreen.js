import { View, Text, Image, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors, icons } from "../constants"
import { styles, coin_price } from "../res"
import Icon from "react-native-vector-icons/Ionicons"



const CoinStoreScreen = () => {
    return (
        <View style={[styles.container]}>
            <Text style={{ fontSize: 32, textAlign: "center" }}>Buy Coins</Text>
            <View>
                
            </View>
            <FlatList
                data={coin_price}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: colors.grey, padding: 16, borderRadius: 20, flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30 }} source={icons.coin} />
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.amount}</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: colors.black, width: 150, height: 50, borderRadius: 20, justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ color: colors.white, fontWeight: 'bold' }}>₦{item.price}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={coin_price => coin_price.id}
            />


        </View>
    )
}


export default CoinStoreScreen