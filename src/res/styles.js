import { StyleSheet } from "react-native";
import { colors } from "../constants";



const styles = StyleSheet.create({
    container:{
        padding: 20, 
        flex: 1,
        backgroundColor: colors.white
    }, 
    h1:{
        fontSize: 32,
        fontWeight: 'bold'
    },
    h2:{
        fontSize: 20,
        fontWeight: 'bold'
    },
  
    caption:{
        fontSize: 32,
        fontWeight: 'bold'
    },
    body:{
        fontSize: 32,
        fontWeight: 'bold'
    }
})

export default styles