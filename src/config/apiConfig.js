import axios from 'axios'
export const API_BASE_URL="http://localhost:6464"
const jwt=localStorage.getItem('jwt');

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authoriztion":`Bearer ${jwt}`,
        'Content-Type':'application/json'

    }

})