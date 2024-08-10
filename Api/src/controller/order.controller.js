import { orderServiceCreateOrder, orderServiceFindOrderById, orderServiceusersOrderHistory } from "../services/orderService.js";


export const createOrder=async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await orderServiceCreateOrder(user,req.body);
        res.status(201).send(createOrder);
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }
}

export const findOrderById = async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await orderServiceFindOrderById(req.params.id);
        return res.status(201).send(createOrder);
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }
}

export const orderHistory = async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await orderServiceusersOrderHistory(user._id);
        return res.status(201).send(createOrder);
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }
}


