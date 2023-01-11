import axios from "axios"
const SERVER_BASE_URI = 'https://maxapi.pythonanywhere.com/api/v1'

const createUser = (username, instagram_id)=>{

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
        url: `${SERVER_BASE_URI}/accounts/login/`,
        headers: {
            Accept: '*/*',
            'User-Agent': 'Deamon',
            'Content-Type': 'application/json'
        }
    };

    axios.request(options)
        .then(() => {
            setToken(res.data)
            SetIsLoading(false)
        })
        .catch((e)=>{
            console.log(e)
        })
    
}



export default { userBalance, buyCredit, likeCredit}