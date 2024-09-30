import React, { useEffect } from "react";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { getCart } from "../../../state/Cart/cartSlice";




const Cart = () => {

  const dispatch=useDispatch();

  const navigate=useNavigate();
  const {cart}=useSelector((state)=>state)
  


  const handleCheckOut=()=>{
   
    navigate(`/checkout/?step=2`)



  }
  const user = useSelector((state)=>state.auth)

  
  useEffect(()=>{
    {
      

  dispatch(getCart())

  }
  
},[cart.updateCartItem,cart.deleteCartItem,user.jwt])



  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16  relative mt-5 ">
        <div className="col-span-2">
        {cart &&  cart.cartItems ? cart.cartItems.map((item,index)=> <CartItem {...item} key={index}/>):<h1>No items selected.Please select some items </h1>}
         
        
        </div>

        <div className="px-5 sticky top-0-h-[100vh] mt-5 lg:mt-0 rounded-md  ">
          <div className="price-details p-8 border-t-2 rounded-lg">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="flex flex-wrap justify-between mt-5 mb-3">
              <p className="font-semibold opacity-60">Price</p>
              <p className="text-green-500 font-bold">Rs{cart.cart?.totalPrice}</p>
            </div>
            <hr/>
            <div className="flex flex-wrap justify-between mt-5">
              <p className="font-semibold opacity-60">Discount</p>
              <p className="text-green-500 font-bold">Rs{cart.cart?.discounts}</p>
            </div>
            <div className="flex flex-wrap justify-between mt-5 mb-3">
              <p className="font-semibold opacity-60">Delivery Charges</p>
              <p className="text-green-500 font-bold">Free</p>
            </div>
            <hr />
            <div className="mt-2 flex flex-wrap justify-between ">
              <h1 className="font-bold text-lg  ">Total Amount</h1>
              <p className="text-green-500 font-bold">Rs{cart.cart?.totalDiscountedPrice}</p>
            </div>
            
            <button onClick={()=>handleCheckOut()} className=" text-center bg-purple-500 text-white pt-3 pb-3 w-full rounded-md  mt-4">Check Out</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
