import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/Cart/cartSlice";

const CartItem = (props) => {
  // console.log(props)
  const dispatch=useDispatch();

  const handleUpdateCartItem=(num)=>{
    const data={
      data:{
        quantity:props.quantity+num
        
      },
      cartItemId:props?._id

    }
   
  //  console.log('quantity is',data.data.quantity)
    dispatch(updateCartItem(data))

   

  }
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(props?._id))

  }
 
  return (
    <>
      <div className="p-5 shadow-lg border rounded-md ">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              className="w-full h-full object-cover object-top"
              src={props.product.imageUrl}
            />
          </div>
          <div className="ml-5 space-y-1">
            <p className="font-semibold">{props.product.title}</p>
            <p className="opacity-70 ">Size:{props.size},{props.product.color}</p>
            <p className="opacity-70 mt-2">Seller: Christaliyo 2fashion</p>

            <div className="flex space-x-5 items-center text-lg  text-gray-900 mt-6 ">
              <p className="font-semibold">Rs {props.product.price}</p>
              <p className="oapcity-50 line-through">Rs {props.product.discountedPrice}</p>
              <p className="text-green-500 font-semibold">{props.product.discountedPercent}% off</p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={props?.quantity<=1}>
              <RemoveCircleIcon />
            </IconButton>
            <span className="py-1 px-7  rounded-sm"> {props?.quantity}</span>
            <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={()=>handleUpdateCartItem(1)}>
              <AddCircleIcon />
            </IconButton>
          </div>
          <div>
            <Button sx={{ color: "RGB(145 85 253)" }} onClick={handleRemoveCartItem}>remove</Button>
          </div>
        </div>
      </div>
     
  
    </>
  );
};

export default CartItem;
