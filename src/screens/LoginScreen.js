import { TextInput, KeyboardAvoidingView, View, Image, Text } from "react-native"
import { colors, icons, } from "../constants"
import { styles } from "../res"
import { Button } from "../components"
import React, { useContext, useState } from "react"
import Lottie from 'lottie-react-native';
import { UserContext } from "../context/UserContext"


const LoginScreen = () => {

    const { login } = useContext(UserContext)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleLogin = () =>{
        if(username.trim().length < 2 || password.trim().length < 2){
            setError('Username and Password cannot be empty')
            return
        }
        login(username, password, setError)
        
    }

    return (

        <KeyboardAvoidingView style={[styles.container, { justifyContent: "center" }]}>
            <View style={{ marginBottom: 40 }}>
                <Lottie 
                    style={{ width: 200, alignSelf: 'center'}} 
                    source={require('../res/lottie/social.json')} 
                    autoPlay loop 
                />
                <Text 
                    style={{ fontSize: 32, textAlign: 'center' }}
                >Welcome to Follow Max </Text>

            </View>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{ fontSize: 16, backgroundColor: colors.grey, padding: 16, borderRadius: 16, fontWeight: 'bold', marginBottom: 20 }}
                    placeholder="Username"
                    onChangeText={(value)=> setUsername(value)}
                />
                <TextInput
                    style={{ fontSize: 16, backgroundColor: colors.grey, padding: 16, borderRadius: 16, fontWeight: 'bold' }}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={(value)=> setPassword(value)}
                />
                <Text style={{ color: colors.red}}>{ error }</Text>

            </View>

            <Button
                title="Login"
                onPress={ handleLogin }
            />

            <Text style={{ fontSize: 16, marginTop: 20, textAlign: "center" }}>Login with your instagram username and password, your password is not stored in our database</Text>
        </KeyboardAvoidingView>
    )
}


export default LoginScreen