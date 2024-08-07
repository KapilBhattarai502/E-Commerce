

// creating a function for updating the cart item 

import { User } from "../models/user.model";

async function updateCartItem(userId,cartItemId,cartItemData){

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
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.product.price;
            item.discountedPrice=item.quantity*item.product.disscountedPrice;
            

        }
    } catch (error) {
        
    }
}