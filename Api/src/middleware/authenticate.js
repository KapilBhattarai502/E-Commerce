import { getUserIdFromToken } from "../Config/Jwtprovider.js";
import { findUserById } from "../services/user.service.js";


export const authenticate=async(req,res,next)=>{
    console.log('Headers :',req.headers);

    try {
        const token=await req.headers.authoriztion?.split(" ")[1];
        console.log('token is',token);
        
        if(!token){
            return res.status(404).send({error:"Token Not Found"});

        }
        const userId=await getUserIdFromToken(token);
        const user=findUserById(userId);
        req.user=user;
    } catch (error) {
       

        return res.status(500).send({error:error.message});
        
    }
    next();
}