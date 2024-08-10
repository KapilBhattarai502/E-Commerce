import { reviewServiceCreateReview, reviewServicegetAllReview } from "../services/review.service.js";


export const createReview =async(req,res)=>{

    const user=req.user;
    
    try {
        const review=await reviewServiceCreateReview(req.body,user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}

export const getAllReview =async(req,res)=>{
    const productId=req.params.productId

    const user=req.user;
    
    try {
        const review=await reviewServicegetAllReview(productId);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}