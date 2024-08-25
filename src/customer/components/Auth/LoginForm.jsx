import React from "react";
import { Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button'

import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { loginUser } from "../../../state/Auth/slices/authSlice";


const LoginForm = () => {
  const dispatch=useDispatch();
    const navigate=useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const data=new FormData(event.currentTarget);

    const userData={
        email:data.get("email"),
        password:data.get("password")

    }
 
  
    dispatch(loginUser(userData));

  
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
            <Button className="w-full " type="submit" variant="contained" size="large" sx={{padding:'0.8rem 0', bgcolor:"#9155FD"}}>Login</Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center items-center">
        <div className="py-3 flex items-center">
            <p>Don't Have an account Register?</p>
            <Button onClick={()=>{navigate('/register')}} className="ml-5" size="small" >Register</Button>
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
