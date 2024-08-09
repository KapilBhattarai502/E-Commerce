import { Address } from "../models/address.model";
import { Order } from "../models/order.model";
import { findUserCart } from "./cart.service";

export const orderServiceCreateOrder = async (user, shipAddress) => {
  let address;

  if (shipAddress._id) {
    let existAddress = await Address.findById(shipAddress._id);
    address = existAddress;
  } else {
    //If we want to do some twiks before saving to the database we can use this snippet
    address = new Address(shipAddress);
    address.user = user;
    await address.save();

    // I got little confused here
    user.addresses.push(address);

    await user.save();
  }

  const cart = await findUserCart(user._id);
  const orderItems = [];

  for (let item of cart.cartItems) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
  const createdOrder = new orderItems({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDisountedPrice: cart.totalDiscountedPrice,
    discounts: cart.discounts,
    totalItem: cart.discounts,
    totalItem: cart.totalItem,
    shipAddress: address,
  });

  const savedOrder = await createOrder.save();

  return savedOrder;
};
export const orderServiceFindOrderById = (orderId) => {
  const order = Order.findById(orderId).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress");

  return order;
};


export const orderServiceplaceOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.payementDetails.status = "COMPLETED";

  return await order.save();
};

export const orderServiceconfirmedOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
};

export const orderServiceshipOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "Shipped";
    return await order.save();
  };
  
  export const orderServicedeliveredOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
  };


export const orderServicecancelledOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
  };

export const orderServiceusersOrderHistory=async(userId)=>{

    try {
        const orders=await Order.find({user:userId,orderStatus:"PLACED"}).populate({path:"orderItems",populate:{path:"product"}}).lean()
        return orders

    } catch (error) {
        throw new Error(error.message)
        
    }
}

export const orderServicegetAllOrders=async()=>{

    return await Order.find().populate({path:"orderItems",populate:{path:"product"}}).lean()

}

export const deleteOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);

}