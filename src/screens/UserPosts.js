import { View, Text } from "react-native"
import { Button } from "../components"
import axios from "axios"
import { UserContext } from "../context/UserContext"
import { useEffect, useState } from "react"


// import { allPost } from "../utils/instagram"



const UserPost = () => {
  

  return (
    <View style={{margin: 20}}>
      <Text>All your post</Text>
      <Button title="Get my post" onPress={()=>{
        // allPost('jfmurum')
        alert("Loading")
      }}/>
    </View>
  )
}



export default UserPost