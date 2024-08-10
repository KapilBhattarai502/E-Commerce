import { ratingServiceCreateRating, ratingServicegetAllProductRating } from "../services/rating.service.js";

export const createRating =async(req,res)=>{

    const user=req.user;
    
    try {
        const review=await ratingServiceCreateRating(req.body,user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}

export const getAllRatings =async(req,res)=>{
    const productId=req.params.productId

    const user=req.user;
    
    try {
        const rating=await ratingServicegetAllProductRating(productId);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}