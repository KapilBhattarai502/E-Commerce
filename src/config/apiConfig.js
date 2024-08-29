import axios from 'axios'
export const API_BASE_URL="http://localhost:6464"
const jwt=localStorage.getItem('jwt');
console.log('jwt is',jwt)

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`, 
        'Content-Type':'application/json'
    }

})