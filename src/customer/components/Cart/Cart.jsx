import React from "react";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom"



const Cart = () => {
  const navigate=useNavigate();
  const handleCheckOut=()=>{
   
    navigate(`/checkout/?step=2`)


  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16  relative mt-5 ">
        <div className="col-span-2">
          <CartItem />
        
        </div>

        <div className="px-5 sticky top-0-h-[100vh] mt-5 lg:mt-0 rounded-md  ">
          <div className="price-details p-8 border-t-2 rounded-lg">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="flex flex-wrap justify-between mt-5">
              <p className="font-semibold opacity-60">Discount</p>
              <p className="text-green-500 font-bold">Rs4687</p>
            </div>
            <div className="flex flex-wrap justify-between mt-5 mb-3">
              <p className="font-semibold opacity-60">Delivery Charges</p>
              <p className="text-green-500 font-bold">Free</p>
            </div>
            <hr />
            <div className="mt-2 flex flex-wrap justify-between ">
              <h1 className="font-bold text-lg  ">Total Amount</h1>
              <p className="text-green-500 font-bold">Rs1278</p>
            </div>
            
            <button onClick={()=>handleCheckOut()} className=" text-center bg-purple-500 text-white pt-3 pb-3 w-full rounded-md  mt-4">Check Out</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
