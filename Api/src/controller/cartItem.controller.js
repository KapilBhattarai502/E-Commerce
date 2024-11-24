import { cartItemServiceremoveCartItem, cartItemServiceupdateCartItem } from "../services/cartItem.service.js";

export const updateCartItem=async(req,res)=>{

    const user=await req.user;

    try {
        const updatedCartItem=await cartItemServiceupdateCartItem(user._id,req.params.id,req.body);//req.body=data
        console.log('updatedCartItemis',updatedCartItem)
        return res.status(200).json(updatedCartItem);
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }

}

export const removeCartItem=async(req,res)=>{

    const user=await req.user;

    try {
       await cartItemServiceremoveCartItem(user._id,req.params.id);
        return res.status(200).send({message:"Cart Item removed Successfully"});
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }

}