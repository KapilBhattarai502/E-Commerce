import React from "react";
import AddressCard from "../Addresscard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { Star } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="flex justify-between mt-4 mb-4 shadow-xl p-5 rounded-md">
        <div className="flex-auto">
          <OrderTracker activeStep={3} />
        </div>
        <div>
          <p className="font-semibold opacity-70">Track Your Order</p>
        </div>
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div>
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/x/m/n/40-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4mn9zg7qrmf-bb.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ">
                  <p className="mt-2 font-semibold">
                    Men Silm Mid Rise Black Jeans
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color:pink</span>
                    <span>Size:M</span>
                  </p>
                  <p>Seller:Linaria</p>
                  <p>Rs 1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box>
                <StarIcon
                  sx={{ fontSize: " 2.5rem", color: "purple" }}
                  className="px-2 text-5xl"
                ></StarIcon>
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
