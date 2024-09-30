import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItems",
    },
  ],
  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "addresses",
  },
  payementDetails: {
    payementMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    payementId: {
      type: String,
    },
    payementDetails: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    payementId: {
      type: String,
    },
    payementStatus: {
      type: String,
      default: "PENDING",
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "PENDING",
  },
  totalItem: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalDisountedPrice:{
    type:Number
  },
  discounts:{
    type:Number
  }
});

export const Order = mongoose.model("orders", orderSchema);
