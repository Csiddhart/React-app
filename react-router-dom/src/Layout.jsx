import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (  //outlet er feature hocche ota k jaar moddhye ba jaar pore dile sei gulo k chere baki notun input gulo k manipulate kore debe
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout