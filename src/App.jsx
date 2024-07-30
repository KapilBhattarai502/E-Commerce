import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/components/Navigation/HomeCarousel/Pages/Homepage/Homepage'
import Footer from './customer/components/Footer/Footer'
import Products from './customer/components/Products/Products'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'


const App = () => {
  return (
    
    <div className=''>
    <Navigation/>
    <div className=''>
    {/* <Homepage /> */}
    {/* <Products/> */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    {/* <Checkout/> */}
    {/* <Order/> */}
    <OrderDetails/>


    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default App