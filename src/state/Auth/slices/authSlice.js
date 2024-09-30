import axios from 'axios'
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import { CleanHands } from '@mui/icons-material';
export const registerUser=createAsyncThunk('register/users',async(userData)=>{
    
    const response=await axios.post('http://localhost:6464/auth/signup',userData);
    const user=response.data;
    console.log(user)
    if(user.jwt){
        localStorage.setItem("jwt",user.jwt);
    }
    return response.data;
});



export const loginUser=createAsyncThunk('login/users',async(userData)=>{
   

    try {
        const response=await axios.post(`http://localhost:6464/auth/login`,userData)

       
       
        const user= response.data;

        console.log(user.jwt)



       
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
      console.log('login user jwt is',user.jwt)
       
       return user.jwt;
        
    } catch (error) {

        console.log(error.message)

        
    }

   
        
        
})

export const getUser=createAsyncThunk('get/Users',async(jwt)=>{

    const response=await axios.get(`http://localhost:6464/api/users/profile`,{
                    headers:{
                        "Authorization":`Bearer ${jwt}`
                    }
        
                })
                
                return response.data;
})
export const logout=createAsyncThunk('logout',()=>{
    localStorage.removeItem('jwt');
    return;

})
   
  
        
    

const authSlice =createSlice({
    name:'auth',
    initialState:{
          user: null,
          status: null,
          error: null,
          jwt: localStorage.getItem('jwt')|| null,
    },
   

    extraReducers:builder=>{
        builder
        .addCase(registerUser.pending,(state)=>{
          state.status="pending"

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
            state.jwt=action.payload
           
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
        .addCase(logout.pending,(state,action)=>{
            state.status='pending'
        })
        .addCase(logout.fulfilled,(state)=>{
            state.status="succeeded"
            state.jwt=null
            state.user=null
            state.error=null
        })
        .addCase(logout.rejected,(state,action)=>{
            state.status='rejected'
        })
       

        
    }
})

export default authSlice.reducer;