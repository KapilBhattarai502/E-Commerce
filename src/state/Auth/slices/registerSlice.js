import axios from 'axios'
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
export const registerUser=createAsyncThunk('register/users',async(userData)=>{
    console.log(userData)
    const response=await axios.post('http://localhost:6464/auth/signup',userData);
    const user=response.data;
    if(user.jwt){
        localStorage.setItem("jwt",user.jwt);
    }
    return response.data;
});



export const loginUser=createAsyncThunk('login/users',async(userData)=>{
   

    try {
        const response=await axios.post(`http://localhost:6464/auth/login`,userData)
       
        const user= response.data;
       
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
       
       return user;
        
    } catch (error) {

        console.log(error.message)

        
    }

   
        
        
})

export const getUser=createAsyncThunk('get/Users',async(jwt)=>{
    console.log("Hello buddy")
    const response=await axios.get(`http://localhost:6464/api/users`,{
                    headers:{
                        "Authorization":`Bearer ${jwt}`
                    }
        
                })
                return response.data;
})
   
  
        
    

const authSlice =createSlice({
    name:'auth',
    initialState:{
          user: null,
          status: null,
          error: null,
          jwt: null,
    },
    reducers:{
        logout:(state,action)=>{
            state.jwt=null;
            localStorage.removeItem("jwt");


            
        }
    },

    extraReducers:builder=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.status='pending'
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.jwt=action.payload.jwt
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.status='failed',
            state.error=action.error.message 
        })
        .addCase(loginUser.pending,(state)=>{
            state.status='pending'
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.jwt=action.payload.jwt
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.status='failed',
            state.error=action.error.message 
        })
        .addCase(getUser.pending,(state)=>{
            state.status='pending'
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.user=action.payload
        })
        .addCase(getUser.rejected,(state,action)=>{
            state.status='failed',
            state.error=action.error.message 
        })

        
    }
})

export default authSlice.reducer;