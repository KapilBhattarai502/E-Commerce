

// creating a function for updating the cart item 

import { CartItem } from "../models/cartitem.model";
import { User } from "../models/user.model";
import { findUserById } from "./user.service";



export const cartItemServiceupdateCartItem=async(userId,cartItemId,cartItemData)=>{

    try {
        const item =await findCartItemById(cartItemId);

        if (!item){
            throw new Error("cart item not found:",cartItemId)
        }
        const user=await User.findById(item.userId);
        if(!user){
            throw new Error("user not found : ",userId)
        }
        if(user._id.toString()===userId.toString()){
        
            
            const updatedCartItem=await CartItem.updateOne(
                {_id:cartItemId},
                {
                    quantity:cartItemData.quantity,
                    price:item.quantity*item.product.price,
                    discountedPrice:item.quantity*item.product.disscountedPrice,
                }
            )




            return updatedCartItem;

        
            

        }
        else{
            throw new Error("you can't update this cart Item");
        }
    } catch (error) {
        
    }
}

export const cartItemServiceremoveCartItem=async(userId,cartItemId)=>{
    const cartItem=await findCartItemById(cartItemId);
    const user=await findUserById(userId);

    if(cartItem.userId.toString()===user._id.toString()){
        await CartItem.findByIdAndDelete(cartItemId);

    }
    else{
        throw new Error("You cannot remove another user's item ")
    }

}

export const cartItemServicefindCartItemById=async(cartItemId)=>{

    const cartItem=await findCartItemById(cartItemId);
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("CardItem Not Found with Id",cartItemId)
    }


}