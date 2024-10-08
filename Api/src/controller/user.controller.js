import { User } from "../models/user.model.js";
import {getUserProfileByToken,getAllUsersFromDB} from "../services/user.service.js"

export const getUserProfile=async(req,res)=>{
    try {
        const jwt =req.headers.authorization?.split(" ")[1];
     
        if(!jwt){
            return res.status(404).send({error:"token not found"});
        }
        
        const user =await getUserProfileByToken(jwt);
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})

        
    }


}
export const getAllUsers = async(req,res)=>{
  

    try {
        const users =await getAllUsersFromDB();
        console.log(users)
        return res.status(200).send(users)
        
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}