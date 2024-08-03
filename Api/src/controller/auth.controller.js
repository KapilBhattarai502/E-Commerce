import {getUserByEmail,createUser} from "../services/user.service.js"
import {generateToken} from "../Config/Jwtprovider.js"
import bcrypt from "bcrypt"
// import cartService from "../services/cart.service.js"
import {createCart} from '../services/cart.service.js';

export const register =async(req,res)=>{
    try {
        const user= await createUser(req.body);
        console.log(user._id);
        const jwt=await generateToken(user._id);

        

        await createCart(user);

        return res.status(200).send({jwt,message:'register Success'});
        
    } catch (error) {
      return res.status(500).send({error:error.message})
        
    }

   
}

export const login =async(req,res)=>{
    const {password,email} =req.body;

    try {
       const user =await getUserByEmail(email)

       if(!user){
        return res.status(404).send({message:'User Not Found with email'})
       }

       const isPasswordValid= await bcrypt.compare(password,user.password);

       if(!isPasswordValid){

        return res.status(401).send({message:"Invalid password"});
       }

       const jwt =await generateToken(user._id);

       return res.status(200).send({jwt,message:"Login Successfull"})



        
    } catch (error) {
        return res.status(500).send({error:error.message})


        
    }


}

