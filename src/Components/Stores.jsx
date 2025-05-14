import React from 'react'
import NavbarUi from './Navbar'
import Footer from './Footer'
import StoreGrids from './StoreGrids'

export default function Stores() {
  console.log("hi");
  return (
    <div>
        <>
        <NavbarUi/>
        <StoreGrids/>
        <Footer/>
        </>
    </div>
  )
}
