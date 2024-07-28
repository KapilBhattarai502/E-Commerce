import React from "react";
import IconButton from '@mui/material/IconButton'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

const CartItem = () => {
  return (
    <>
    <div className="p-5 shadow-lg border rounded-md ">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 ">Size:L,White</p>
          <p className="opacity-70 mt-2">Seller: Christaliyo 2fashion</p>

          <div className="flex space-x-5 items-center text-lg  text-gray-900 mt-6 ">
            <p className="font-semibold">Rs 199</p>
            <p className="oapcity-50 line-through">Rs 211</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
      
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton >
                  <RemoveCircleIcon/>
                </IconButton>
                <span className="py-1 px-7  rounded-sm"> 3  </span>
                <IconButton sx={{color:"RGB(145 85 253)"}} >
                <AddCircleIcon/>
                </IconButton>
             
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
            </div>
        </div>

        
    </div>
    <div className="p-5 shadow-lg border rounded-md mt-4 ">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/j/x/v/-original-imaghrnsfvbhrsny.jpeg?q=70"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 ">Size:L,White</p>
          <p className="opacity-70 mt-2">Seller: Christaliyo 2fashion</p>

          <div className="flex space-x-5 items-center text-lg  text-gray-900 mt-6 ">
            <p className="font-semibold">Rs 199</p>
            <p className="oapcity-50 line-through">Rs 211</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
      
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton >
                  <RemoveCircleIcon/>
                </IconButton>
                <span className="py-1 px-7  rounded-sm"> 3  </span>
                <IconButton sx={{color:"RGB(145 85 253)"}} >
                <AddCircleIcon/>
                </IconButton>
             
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
            </div>
        </div>

        
    </div>
    <div className="p-5 shadow-lg border rounded-md mt-4 ">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l4rd0280/shoe/m/d/e/6-rk-494-grey-orange-40-bruton-grey-orange-original-imagfha9ssgydnef.jpeg?q=70"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 ">Size:L,White</p>
          <p className="opacity-70 mt-2">Seller: Christaliyo 2fashion</p>

          <div className="flex space-x-5 items-center text-lg  text-gray-900 mt-6 ">
            <p className="font-semibold">Rs 199</p>
            <p className="oapcity-50 line-through">Rs 211</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
      
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton >
                  <RemoveCircleIcon/>
                </IconButton>
                <span className="py-1 px-7  rounded-sm"> 3  </span>
                <IconButton sx={{color:"RGB(145 85 253)"}} >
                <AddCircleIcon/>
                </IconButton>
             
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
            </div>
        </div>

        
    </div>
    
    </>
  );
};

export default CartItem;
