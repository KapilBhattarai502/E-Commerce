import { cartServiceaddCartItem, cartServicefindUserCart } from "../services/cart.service";



export const findUserCart =async(req,res)=>{
    const user=req.user;

    try {
        const cart=await cartServicefindUserCart(user.id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}

export const addItemToCart =async(req,res)=>{
    const user=req.user;

    try {
        const cartItem=await cartServiceaddCartItem(user._id,req);
        return res.status(200).send(cartItem);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }

}


