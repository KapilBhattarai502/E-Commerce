

// creating a function for updating the cart item 


import { CartItem } from "../models/cartitem.model.js";
import { User } from "../models/user.model.js";
import { findUserById } from "./user.service.js";



export const cartItemServiceupdateCartItem=async(userId,cartItemId,cartItemData)=>{
    
 

    try {
        const item =await cartItemServicefindCartItemById(cartItemId);


        

        if (!item){
            throw new Error("cart item not found:",cartItemId)
        }
        const user=await User.findById(item.userId);
        if(!user){
            throw new Error("user not found : ",userId)
        }
        if(user._id.toString()===userId.toString()){
        
            
            const updatedCartItem = await CartItem.findOneAndUpdate(
                { _id: cartItemId },
                {
                    $set:{
                 
                    quantity: cartItemData.quantity,
                    price: cartItemData.quantity * item.price,
                    discountedPrice: cartItemData.quantity * item.discountedPrice,
                 
                    }
               
                },
                { new: true }  // This returns the updated document
              );


              




            return updatedCartItem;

        
            

        }
        else{
            throw new Error("you can't update this cart Item");
        }
    } catch (error) {
        
    }
}

export const cartItemServiceremoveCartItem=async(userId,cartItemId)=>{
    const cartItem=await cartItemServicefindCartItemById(cartItemId);
    const user=await findUserById(userId);

    if(cartItem.userId.toString()===user._id.toString()){
        await CartItem.findByIdAndDelete(cartItemId);

    }
    else{
        throw new Error("You cannot remove another user's item ")
    }

}

export const cartItemServicefindCartItemById=async(cartItemId)=>{

    const cartItem=await CartItem.findById(cartItemId).populate("product");
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("Cart Item Not Found with Id",cartItemId)
    }


}