import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, WelcomeScreen } from '../screens/'

const Stack = createStackNavigator()


const AuthStack = ()=>{
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    )
}


export default AuthStack