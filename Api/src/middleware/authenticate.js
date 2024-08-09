import { getUserIdFromToken } from "../Config/Jwtprovider.js";
import { findUserById } from "../services/user.service.js";


export const authenticate=async(req,res,next)=>{

    try {
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return req.stauts(404).send({error:"Token Not Found"});

        }
        const userId=getUserIdFromToken(token);
        const user=findUserById
    } catch (error) {

        return res.status(500).send({error:error.message});
        
    }
    next();
}