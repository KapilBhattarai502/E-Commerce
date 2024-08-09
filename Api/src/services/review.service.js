import { Review } from "../models/review.model";
import { findProductById } from "./product.service"

export const reviewServiceCreateReview=async(reqData,user)=>{

    const product=await findProductById(reqData.productId);

    const review=new Review({
        user:user._id,
        product:product._id,
        review:reqData.review,
        createdAt:new Date(),

    })

    await product.save();
    return await review.save();


}

export const reviewServicegetAllReview=async(productId)=>{
    const product=await findProductById(reqData.productId);

    return await Review.find({product:productId}).populate("user");
}

