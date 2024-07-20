import React from "react";
import "./ProductCss.css"

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://static-01.daraz.com.np/p/f5bcc3d421348f9144319f15f5a5bd51.jpg_300x0q75.webp"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Brand:UniversalOutfit</p>
          <p className="text-sm font-medium">Moment V-Neck Top For Women</p>
        </div>
        <div className="flex items-center space-x-2">
            <p className=" text-sm">Rs199</p>
            <p className="line-through text-sm">Rs1999</p>
            <p className="text-sm text-green-600 font-semibold" >70% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
