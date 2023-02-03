import { View, Image, Text, TextInput } from "react-native"

import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { colors } from "../constants"
import { styles } from "../res"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Banner } from "./Ads"

const ProfileScreen = () =>{
    const { userInfor, logout } = useContext(UserContext)

    const handleLogout = ()=>{
        logout()
    }
    return (
        

        <View style={ styles.container }>
            <View 
                style={{ width: 80, height: 80, borderRadius: 76/2, borderWidth: 1, borderColor: colors.black, justifyContent: "center", alignItems: "center", alignSelf: "center"}}
            >
                <Image 
                    style={{ width: 75, height: 75, borderRadius: 75/2}}
                    source={{ uri:userInfor.profile_pic_url }} 
                />
            </View>
            <Text style={{ fontSize: 32, fontWeight: '600', textAlign: 'center', color: colors.black}}>{userInfor.username}</Text>

            <View style={{ marginTop: 20}}>
                <Text style={{fontSize: 16, backgroundColor: colors.grey, padding: 16, fontWeight: 'bold', marginBottom: 20, textAlign: "center"}}>
                    { userInfor.full_name }
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                <View >
                    <Text style={{ textAlign: "center"}}>Current followers</Text>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>45</Text>
                </View>

                <View>
                    <Text style={{ textAlign: "center"}}>Total post made</Text>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>23</Text>
                </View>
            </View>
            <TouchableOpacity style={{ padding: 16, backgroundColor: colors.red, marginBottom: 20}} onPress={ handleLogout }>
                <Text style={{ fontWeight: '600', color:colors.white, textAlign: "center"}}>Logout</Text>
            </TouchableOpacity>
            <Banner/>
            <Banner/>
            <Banner/>
        </View>
        
    )
}


export default ProfileScreen