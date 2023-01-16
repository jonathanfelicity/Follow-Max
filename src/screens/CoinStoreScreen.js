import {
    View,
    Text,
    Image,
    FlatList,
    Modal,
    TouchableOpacity
} from "react-native"
import { useState } from "react";
import Lottie from 'lottie-react-native';


import { colors, icons } from "../constants"
import { styles, coin_price } from "../res"
import { Button } from "../components";






const CoinStoreScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.container]}>
            <Text style={{ fontSize: 32, textAlign: "center" }}>Buy Coins</Text>
            <FlatList
                data={coin_price}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: colors.grey, padding: 16, borderRadius: 20, flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30 }} source={icons.coin} />
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.amount}</Text>
                            </View>
                            <TouchableOpacity

                                style={{ backgroundColor: colors.black, width: 150, height: 50, borderRadius: 20, justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}
                                onPress={() => {
                                    setModalVisible(true)
                                }}
                            >
                                <Text style={{ color: colors.white, fontWeight: 'bold' }}>₦{item.price}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={coin_price => coin_price.id}
            />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, alignItems: 'center', padding: 20}}>
                    <Lottie 
                        style={{height: 400}}
                        source={require('../res/lottie/error.json')}
                        autoPlay loop
                    />
                    <Text style={{
                        textAlign: 'center',
                        color: 'red',
                        fontSize: 16,
                        marginBottom: 20
                    }}>Application encontered an error connecting to payment server.</Text>
                    
                    <Button title="Continue with manual transfer"/>
                </View>
            </Modal>

        </View>
    )
}


export default CoinStoreScreen