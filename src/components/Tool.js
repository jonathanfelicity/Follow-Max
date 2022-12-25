import { TouchableOpacity, StyleSheet, Text, View } from "react-native"

import { colors } from "../constants"
import Icon from "react-native-vector-icons/Ionicons"

const Tool = ({ title, color, icon })=>{
    return (
        <TouchableOpacity style={ styles.container }>
            <View style={[styles.icon, {backgroundColor:color}]}>
                <Icon name={icon} size={20} color={colors.white} />
            </View>
            <Text style={ styles.text }>{ title|| "add title prop" }</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 20, 
       
        height: 100, 
        marginLeft: 20, 
        borderRadius: 20, 
        width: 200, 
        borderWidth: 1, 
        borderColor: colors.grey,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
})


export default Tool