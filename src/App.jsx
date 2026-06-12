// import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './layout.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  Home  from './Pages/Home.jsx'
import  Products  from './Pages/Products.jsx'
import  Cart  from './Pages/Cart.jsx'
import  Login  from './Pages/Login.jsx'
import Navbar from './Pages/shared/Navbar.jsx'
import Layout from './Pages/shared/Layout.jsx'
import Mugs from './Pages/Mugs.jsx'
import Tshirts from './Pages/Tshirts.jsx'
function App() {

  return (
    <>
    <Layout>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/mugs' element={<Mugs/>} />
        <Route path='/tshirts' element={<Tshirts/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
