import {Address} from "../models/user.model.js"
import { Order } from "../models/order.model.js";
import { OrderItem } from "../models/orderItems.js";
import { cartServicefindUserCart } from "./cart.service.js";

export const orderServiceCreateOrder = async (user, newAddress) => {
  // console.log('shipAddress is',shipAddress)
  let address;

  const savedAddress=await Address.create(newAddress);


  



  // if (shipAddress._id) 
  // {
  //   let existAddress = await Address.findById(shipAddress._id).lean();
  //   address = existAddress;
  // } else {
    //If we want to do some twiks before saving to the database we can use this snippet
    // address = new Address(shipAddress);
    // address.user = user;
    // await address.save();

    // I got little confused here  
 
  // }
  user.address.push(savedAddress);
  // console.log(user.address)

  await user.save();
  
  const cart = await cartServicefindUserCart(user._id);
  const orderItems = [];

  for (let item of cart.cartItems) {
    const orderItem = new OrderItem({
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
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDisountedPrice: cart.totalDiscountedPrice,
    discounts: cart.discounts,
    totalItem: cart.discounts,
    totalItem: cart.totalItem,
    shippingAddress: savedAddress,
  });

  const savedOrder = await createdOrder.save();

  return savedOrder;
};
export const orderServiceFindOrderById = async(orderId) => {
  const order =await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
};

export const orderServiceplaceOrder = async (orderId) => {
  const order = await orderServiceFindOrderById(orderId);
  order.orderStatus = "PLACED";
  order.payementDetails.status = "COMPLETED";

  return await order.save();
};

export const orderServiceconfirmedOrder = async (orderId) => {
  const order = await orderServiceFindOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
};

export const orderServiceshipOrder = async (orderId) => {
  const order = await orderServiceFindOrderById(orderId);
  order.orderStatus = "Shipped";
  return await order.save();
};

export const orderServicedeliveredOrder = async (orderId) => {
  const order = await orderServiceFindOrderById(orderId);
  order.orderStatus = "DELIVERED";
  return await order.save();
};

export const orderServicecancelledOrder = async (orderId) => {
  const order = await orderServiceFindOrderById(orderId);
  order.orderStatus = "CANCELLED";
  return await order.save();
};

export const orderServiceusersOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const orderServicegetAllOrders = async () => {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
};

export const orderServicedeleteOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
};
