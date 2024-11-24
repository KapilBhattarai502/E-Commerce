import React, { useEffect } from "react";
import "./ProductCss.css"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const ProductCard = (products) => {
  console.log(products)
  const navigate=useNavigate();
  
  
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer" onClick={()=>{
     navigate(`/product/${products._id}`);
    }}>
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={products.imageUrl}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Brand:{products.brand}</p>
          <p className="text-sm font-medium">{products.title}</p>
        </div>
        <div className="flex items-center space-x-2">
            <p className=" text-sm">{products.discountedPrice}</p>
            <p className="line-through text-sm">{products.price}</p>
            <p className="text-sm text-green-600 font-semibold" >{products.discountedPrice}OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
