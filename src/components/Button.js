import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { colors } from "../constants"

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: colors.yellow
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.black
    }
})

export default Button