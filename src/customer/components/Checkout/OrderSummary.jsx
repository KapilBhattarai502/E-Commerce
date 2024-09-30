import { React, useEffect } from "react";
import AddressCard from "../Addresscard/AddressCard";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../state/Order/orderSlice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jwt = localStorage.getItem("jwt");
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((state) => state);
  // console.log("order is", order);
  

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  function generateUUID() {
    const part1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const part2 = Math.floor(Math.random() * 1000); // Random number between 0 and 999
    const part3 = Math.floor(Math.random() * 100); // Random number between 0 and 99

    return `${part1}-${part2}-${part3}`;
  }

  async function handleCheckOut() {
    const amount = order?.order?.totalDisountedPrice || 0; // Ensure amount is set properly
    const tax_amount = 0;
    const total_amount = amount + tax_amount;

    const esewaData = {
      amount: amount,
      tax_amount: tax_amount,
      total_amount: total_amount,
      transaction_uuid: generateUUID(),
      product_code: "EPAYTEST",
      product_service_charge: 0,
      product_delivery_charge: 0,
      success_url: "http://localhost:5173/",
      failure_url: "http://localhost:5173/",
      signed_field_names:"total_amount,transaction_uuid,product_code",
      // signature:generateSignature(total_amount,transaction_uuid,product_code,secret_key),
    };

    const response = await fetch("http://localhost:6464/generate-signature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        total_amount: esewaData.total_amount,
        transaction_uuid: esewaData.transaction_uuid,
        product_code: esewaData.product_code,
      }),
    });

    const data = await response.json();
    esewaData.signature = data;

    if (jwt) {
      const form = document.createElement("form");
      form.setAttribute(
        "action",
        "https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      ),
        form.setAttribute("method", "POST");

      // append from fields

      for (const [key, value] of Object.entries(esewaData)) {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("value", value);
        form.appendChild(input);
      }
      // append form to the body

      document.body.appendChild(form);
      form.submit();
    } else {
      alert("you are not authorised");
    }
  }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard {...order?.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {order?.order?.orderItems?.map((item) => {
            return <CartItem {...item} />;
          })}
        </div>
        <div className="px-5 sticky top-0-h-[100vh] mt-7 lg:mt-0 rounded-md  ">
          <div className="price-details p-8 border-t-2 rounded-lg">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="flex flex-wrap justify-between mt-5">
              <p className="font-semibold opacity-60">Price</p>
              <p className="text-green-500 font-bold">
                Rs {order.order?.totalPrice}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-5 mb-3">
              <p className="font-semibold opacity-60">Discount</p>
              <p className="text-green-500 font-bold">
                {order.order?.discounts}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-5 mb-3">
              <p className="font-semibold opacity-60">Delivery Charges</p>
              <p className="text-green-500 font-bold">Free</p>
            </div>
            <hr />
            <div className="mt-2 flex flex-wrap justify-between ">
              <h1 className="font-bold text-lg">Total Amount</h1>
              <p className="text-green-500 font-bold">
                Rs{order.order?.totalDisountedPrice}
              </p>
            </div>

            <button
              onClick={() => handleCheckOut()}
              className=" text-center bg-purple-500 text-white pt-3 pb-3 w-full rounded-md  mt-4"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
