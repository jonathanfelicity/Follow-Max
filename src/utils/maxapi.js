import axios from "axios"
const SERVER_BASE_URI = 'https://maxapi.pythonanywhere.com/api/v1'

const HEADERS = {
    Accept: '*/*',
    'User-Agent': 'Deamon',
    'Content-Type': 'application/json'
}



const checkUser = (username, instagram_id)=>{
    const options = {
        method: 'POST',
        url: `${SERVER_BASE_URI}/users/login`,
        headers: HEADERS,
        data:{
            username: username, 
            insta_id: instagram_id
        }
    };

    axios.request(options)
        .then(() => {
            console.log("DONE!!!!")
        })
        .catch((e)=>{
            console.log("SOME ERROR HAPPEND")
            console.log(e)
        })
}



const followCredit = (user, account_id)=>{

}

const likeCredit = (user, post_id)=>{
    
}


const buyCredit = (user, amout)=>{

}


const userBalance = (username)=>{
    const options = {
        method: 'POST',
        url: `${SERVER_BASE_URI}/users/${username}/balance`,
        headers: HEADERS
    };

    axios.request(options)
        .then((res) => {
           return res.balance
        })
        .catch((e)=>{
            console.log(e)
        })
    
}



export { checkUser,  userBalance, buyCredit, likeCredit}