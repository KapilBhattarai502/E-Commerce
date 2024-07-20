import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/components/Navigation/HomeCarousel/Pages/Homepage/Homepage'
import Footer from './customer/components/Footer/Footer'
import Products from './customer/components/Products/Products'


const App = () => {
  return (
    
    <div className=''>
    <Navigation/>
    <div className=''>
    {/* <Homepage /> */}
    <Products/>
    


    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default App