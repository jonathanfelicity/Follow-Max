import { View, Text } from "react-native"
import Lottie from 'lottie-react-native';


const Loader = () => {
    return (
        <View style={[{ justifyContent: "center", alignItems: "center", flex: 1 }]}>
            <Lottie source={require('../res/lottie/loader.json')} autoPlay loop />
            <Text style={{ marginTop: 20}}>Loading...</Text>
        </View>
    )
}


export default Loader