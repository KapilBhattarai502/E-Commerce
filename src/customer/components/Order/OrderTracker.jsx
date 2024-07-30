import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const OrderTracker = ({activeStep}) => {
    const steps=['placed','Order Confirmed','Shipped','Out For Delivery','Delivered']
  return (
    <div>
    <Stepper activeStep={activeStep} alternativeLabel>
    {
        steps.map((label,index)=>{
            return(
                <Step key={index}>
                  <StepLabel sx={{color:"#9155FD",fontSize:"44px"} }>{label}</StepLabel>
                </Step>
            )
        })
    }
      
    </Stepper>

    </div>
  )
}

export default OrderTracker