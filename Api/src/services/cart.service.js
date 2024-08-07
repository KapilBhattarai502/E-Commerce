import { Cart } from "../models/cart.model.js";
import { CartItem } from "../models/cartitem.model.js";
import { Product } from "../models/product.model.js";

export async function createCart(user){
    try {
        const cart = new Cart({user})
        const createdCart =await cart.save();
        return createCart;
        
    } catch (error) {
        throw new Error(error.message)
        
    }
   
}

export async function findUserCart(userId){
    try {
        let cart = await Cart.findOne({user:userId});
        let cartItems=await CartItem.find({cart:cart._id}).populate("products");
        cart.cartItems=cartItems;

        let totalPrice=0;
        let totalDiscountedPrice=0;
        let totalItem=0;
        for(let cartItem of cart.cartItems){
            totalPrice+=cartItem.price;
            totalDiscountedPrice+=cartItem.discountedPrice;
            totalItem+=cartItem.quantity;


        }
        cart.totalPrice=totalPrice;
        cart.totalItem=totalItem;
        cart.discounts=totalPrice-totalDiscountedPrice;

        return cart;

    } catch (error) {
        throw new Error(error.message);
        
    }

}

export const addCartItem=async(userId,req)=>{
    try {
        const cart=await Cart.findOne({user:userId});
        const product=await Product.findById(req.productId);

        const isPresent =await CartItem.findOne({cart:cart._id,product:product._id,userId})

        if(!isPresent){
            const cartItem=await CartItem.create({
                cart:cart._id,
                product:product._id,
                size:req.size,
                quantity:1,
                userId,
                price:product.price,
                discountedPrice:product.discountedPrice,


            })

            return "Item added Successfully"



        }

    } catch (error) {
        throw new Error(error.message)
        
    }

}
