import React from "react";
import Grid from "@mui/material/Grid";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useNavigate} from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div className="shadow-lg p-5 rounded-md hover:shadow-2xl mb-5" onClick={()=>{
      navigate(`/account/order/${5}`)
    }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item md={6} xs={12} sm={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/7/k/2/xl-kcsh-fo-1647-ma-fubar-original-imaghehzpwgjzg2y.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 sapce-y-2">
              <p className="">Men Silm Mid Rise Black Jeans</p>
              <p className="opacity:50 text-xs font-semibold ">Size: M </p>
              <p className="opacity:50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item md={2} xs={12} sm={2}>
          <p className="">Rs1099</p>
        </Grid>
        <Grid item md={4} xs={12} sm={4}>
          {true && (
            <>
            <div className="flex flex-col items-center">
              <p className="flex items-center gap-3">
              <FiberManualRecordIcon color="success" />
              
                <span>Delivered On March 03</span>
              
              </p>
              <p className="text-xs mx-auto"> Your item has been delivered</p>
              </div>
            </>
          )}
          {false && (
            <>
              <p>
                
                <span>Expected Delivery on Mar 03</span>
              </p>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
