import React from "react";
import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  return (
    <div className="mt-8 px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} md={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sricky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option, index) => {
                return (
                  <div className="flex items-center">
                    <input
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-2" htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9} >
        {[1,1,1,1].map((item,index)=> <OrderCard/>)}

       
    

        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
