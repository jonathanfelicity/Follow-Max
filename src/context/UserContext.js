import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const SERVER_BASE_URI = 'https://maxapi.pythonanywhere.com/api/v1'
const INSTAGRAM_BASE_URI = 'https://i.instagram.com/api/v1'

import { checkUser } from "../utils/maxapi";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [userInfor, setUserInfor] = useState(null)
    const [token, setToken] = useState(null)
    const [isLoading, SetIsLoading] = useState(false)


    // authenticating a user 
    const login = (username, password, setError) => {

        const options = {
            method: 'POST',
            url: `${INSTAGRAM_BASE_URI}/accounts/login/`,
            headers: {
                Accept: '*/*',
                'User-Agent': 'Instagram 26.0.0.10.86 Android (24/7.0; 640dpi; 1440x2560; HUAWEI; LON-L29; HWLON; hi3660; en_US)',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data: {
                username: username,
                password: password,
                phone_id: '9e4b0aa3-1a5b-4e21-9133-a290d56283b0',
                device_id: 'android-6d1143ccdb9e5b91',
                guid: '0cc962ce-e695-4115-a3c9-33843e525e7e'
            }
        };
        // tring to login
        axios.request(options)
            .then(async (res) => {
                SetIsLoading(true)
                await AsyncStorage.setItem('token', JSON.stringify(res.headers))
                await AsyncStorage.setItem('user', JSON.stringify(res.data.logged_in_user))
               
                if(res.data.logged_in_user != null){
                    checkUser(res.data.logged_in_user.username, res.data.logged_in_user.pk)
                    setToken(res.headers)
                    console.log(user.headers)
                    SetIsLoading(false)
                }



            })
            .catch((e) => {
                setError("wrong username or password")
            })

    }

    
    // following a user 
    const follow = () =>{
        const options = {
            method: 'POST',
            url: `${INSTAGRAM_BASE_URI}/friendships/create/47679826527`,
            headers: {
                Accept: '*/*',
                'User-Agent': 'Instagram 26.0.0.10.86 Android (24/7.0; 640dpi; 1440x2560; HUAWEI; LON-L29; HWLON; hi3660; en_US)',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        };

        // tring to login
        axios.request(options)
            .then(async (res) => {
                SetIsLoading(true)
                alert('done')
            })
            .catch((e) => {
                console.log(e)
                alert("some error occured")
            })
    }

   

    const logout = async () => {
        setToken(null)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user') 
    }






    
    
    const isLoggedIn = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            let user = await AsyncStorage.getItem('user')
            setUserInfor(JSON.parse(user))
            setToken(JSON.parse(token))


        } catch (e) {
            console.log(e)
        }
    }


    
    
    
    
    useEffect(() => {
        isLoggedIn()
    }, [])

    
    
    
    
    
    
    
    
    const value = {
        login,
        logout,
        token,
        userInfor,
        isLoading,
        follow
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}


