import { View, Text, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants";

const MineCoinScreen = ()=>{
    return (
        <View style={{ flex: 1, padding: 20}}>
            <View style={{ flexDirection: 'row', justifyContent:"space-between"}}>
                <TouchableOpacity 
                    style={{ borderWidth: 1, borderColor: colors.dark, padding: 20, borderRadius: 20, width: 150}}
                >
                    <Text style={{ textAlign: 'center'}}>Follow to earn more coin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderWidth: 1, borderColor: colors.dark, padding: 20, borderRadius: 20, width: 150}}
                >
                    <Text style={{ textAlign: 'center'}}>Watch Ads to earn coin</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 30
            }}>
                <View>
                    <Image/>
                   <TouchableOpacity style={{
                        padding: 16,
                        backgroundColor: colors.yellow,
                        borderRadius: 30
                   }}>
                        <Text style={{
                            textAlign: "center", 
                            fontWeight: "bold"
                        }}>LIKE</Text>
                   </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


export default MineCoinScreen