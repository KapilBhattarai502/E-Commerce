import { Rating } from "../models/rating.model";
import { findProductById } from "./product.service"


export const ratingServiceCreateRating=async(reqData,user)=>{
    const product=await findProductById(reqData.productId);

    const rating=new Rating({
        product:product._id,
        user:user._id,
        rating:req.rating,
        createdAt:new Date()

    })

    return await rating.save();

}

export const ratingServicegetAllProductRating=async(productId)=>{


    return await Rating.find({product:productId});
}