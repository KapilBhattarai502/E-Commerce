import { cancelledOrder, confirmedOrder, deleteOrder, deliveredOrder, getAllOrders, shipOrder } from "../services/orderService.js"


export const getAllOrderss=async(req,res)=>{
    try {
        const orders=await getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export const confirmedOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export const shipOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export const deliverOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await deliveredOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export const cancelledOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export const deleteOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

