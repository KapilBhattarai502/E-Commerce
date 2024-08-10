import { Review } from "../models/review.model.js";
import { productServiceFindProductById } from "./product.service.js"

export const reviewServiceCreateReview=async(reqData,user)=>{

    const product=await productServiceFindProductById(reqData.productId);

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
    // const product=await findProductById(reqData.productId);

    return await Review.find({product:productId}).populate("user");
}

