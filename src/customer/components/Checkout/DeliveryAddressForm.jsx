import React from "react";
import Grid from "@mui/material/Grid";
import AddressCard from "../Addresscard/AddressCard";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { createOrder } from "../../../state/Order/orderSlice";

const DeliveryAddressForm = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)

  
    const handleSubmit=(event)=>{
        event.preventDefault();
    
        const data=new FormData(event.currentTarget);
        
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("City"),
            state:data.get("State"),
            zipCode:data.get("Zippostal"),
            phoneNumber:data.get("PhoneNumber")
        }
        const orderData={address,navigate}
        dispatch(createOrder(orderData))

        
  
     


    }
    
  return (
    <div className="">
      <Grid container spacing={4}>
        <Grid
          item
          lg={5}
          xs={12}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-6 py-7  cursor-pointer">
          { user?.address?.map((item)=>{
            return(

            <AddressCard {...item}/>
            )
            

          })
          }
            
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="firstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="lastName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State/Province/Region"
                    name="State"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Zippostal"
                    name="Zippostal"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="PhoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                  type="submit"
            
                    
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
