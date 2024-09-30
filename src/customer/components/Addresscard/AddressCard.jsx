import React from 'react'
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { createOrder } from '../../../state/Order/orderSlice';

const AddressCard = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  function handleDelivery(event){

   const address={
    firstName:props.firstName,
    lastName:props.lastName,
    city:props.city,
    streetAddress:props.streetAddress,
    state:props.state,
    zipCode:props.zipCode,
    phoneNumber:props.phoneNumber,
  }


  const orderData={address,navigate}
  dispatch(createOrder(orderData))
    
  }
  return (
    <div>
        <div className='space-y-3 mt-6'>
            <p className='font-semibold'>{props.firstName} {props.lastName}</p>
            <p>{props.city},{props.streetAddress},{props.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number</p>
                <p>{props.phoneNumber}</p>
            </div>
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              onClick={()=>{handleDelivery(event)}}
            >
              Deliver Here
            </Button>

        </div>
    </div>
  )
}

export default AddressCard