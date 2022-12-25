import { NavigationContainer } from "@react-navigation/native";

import React, { useContext } from "react";

import { AuthStack, AppStack } from '.'
import { UserContext } from "../context/UserContext";

import { Loader } from "../components";

const Root = () =>{
    const { token, isLoading } = useContext(UserContext)

    if(isLoading){
      return <Loader/>
    }
    return (
        <NavigationContainer>
          {  token  !== null ? <AppStack/>: <AuthStack/> }
        </NavigationContainer>
    )
}


export default Root