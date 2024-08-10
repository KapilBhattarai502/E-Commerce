import {
  orderServicecancelledOrder,
  orderServiceconfirmedOrder,
  orderServicedeleteOrder,
  orderServicedeliveredOrder,
  orderServicegetAllOrders,
  orderServiceshipOrder,
} from "../services/orderService.js";

export const getAllOrderss = async (req, res) => {
  try {
    const orders = await orderServicegetAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const confirmedOrderss = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServiceconfirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const shipOrderss = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServiceshipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deliverOrderss = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServicedeliveredOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const cancelledOrderss = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServicecancelledOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deleteOrderss = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServicedeleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
