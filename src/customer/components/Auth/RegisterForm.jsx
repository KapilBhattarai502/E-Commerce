import React, { useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button'
import { Link,useNavigate } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import { registerUser } from "../../../state/Auth/slices/authSlice";
import { getUser } from "../../../state/Auth/slices/authSlice";

const RegisterForm = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector((state)=>state)

 
   
  useEffect(()=>{
    if(jwt){
    dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])


  const handleSubmit = (event) => {

    event.preventDefault();
    const data=new FormData(event.currentTarget);

    const userData={
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        email:data.get("email"),
        password:data.get("password")

    }
 
  dispatch(registerUser(userData));

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button className="w-full " type="submit" variant="contained" size="large" sx={{padding:'0.8rem 0', bgcolor:"#9155FD"}}>Register</Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center items-center">
        <div className="py-3 flex items-center">
            <p>Do you already have an account?</p>
            <Button  onClick={()=>navigate("/login")} className="ml-5" size="small">Login</Button>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
