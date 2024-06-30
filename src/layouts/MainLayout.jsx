import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const MainLayout = () => {
  return (
    <>
    <Nav />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
