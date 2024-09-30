import { Cart } from "../models/cart.model.js";
import { CartItem } from "../models/cartitem.model.js";
import { Product } from "../models/product.model.js";

export async function cartServicecreateCart(user){
    try {
        const cart = new Cart({user})
        const createdCart =await cart.save();
        return createdCart;
        
    } catch (error) {
        throw new Error(error.message)
        
    }
   
}

export async function cartServicefindUserCart(userId){
    try {
        let cart = await Cart.findOne({user:userId});
       
        let cartItems=await CartItem.find({cart:cart._id}).populate("product");
        cart.cartItems=cartItems;
       

        let totalPrice=0;
        let totalDiscount=0;
        let totalDiscountedPrice=0;
        let totalItem=0;
        for(let cartItem of cart.cartItems){
            totalPrice+=cartItem.product.price*cartItem.quantity;
            totalDiscountedPrice+=cartItem.discountedPrice;
            totalDiscount+=cartItem.discountedPrice
            totalItem+=cartItem.quantity;


        }
        cart.totalPrice=totalPrice;
        cart.totalItem=totalItem;
        cart.discounts=totalDiscount;
        cart.totalDiscountedPrice=totalPrice-totalDiscount;

        return cart;

    } catch (error) {
        throw new Error(error.message);
        
    }

}

export const cartServiceaddCartItem=async(userId,req)=>{
    try {
    
        const cart=await Cart.findOne({user:userId});
        console.log('cart is',cart)
        const product=await Product.findById(req.body.productId);


        const isPresent =await CartItem.findOne({cart:cart._id,product:product._id,userId})

        if(!isPresent){
            const cartItem=await CartItem.create({
                cart:cart._id,
                product:product._id,
                size:req.body.size,
                quantity:1,
                userId,
                price:product.price,
                discountedPrice:product.discountedPrice,


            })

             await cartItem.save()



            return "Item added Successfully"



        }

    } catch (error) {
        throw new Error(error.message)
        
    }

}


