import { TouchableOpacity, Text, StyleSheet, View } from "react-native"

import { colors } from "../constants"
import Icon from "react-native-vector-icons/Ionicons"

const Menu = ({ title, color, icon, onPress })=>{
    return (
        <View>

        <TouchableOpacity 
        onPress={onPress}
        style={[styles.container, { backgroundColor:colors.grey}]}
        >
            
                <Icon name={icon} size={30} color={colors.darkBlue} />
            {/* <View style={[ styles.icon, { backgroundColor: color}]}>
            </View> */}
            
        </TouchableOpacity>
        <Text style={[ styles.text, {textAlign: "center"} ]}>{ title }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: 100, 
        height: 100,
        padding: 16,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        marginTop: 16, 
        fontSize: 16,
        color: colors.dark,
        fontWeight: '350',
    },
    icon:{
        width: 35,
        height: 35,
        borderRadius: 50 / 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Menu