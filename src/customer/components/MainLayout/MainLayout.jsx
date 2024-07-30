import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout