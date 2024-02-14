import React from 'react'
import './App.css'
 
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Cart from './Component/Cart/Cart.jsx'

import LoginSignup from './Pages/LoginSignup'
import Testimonial from './Pages/Testimonial'
import Footer from './Component/Footer/Footer'
import Product from './Pages/Product.jsx'
import Clothes from './Pages/Clothes'
import Nursery  from './Pages/Nursery'
import Nutrition from './Pages/Nutrition'
import Toys from './Pages/Toys'
import ShopCategory from './Pages/ShopCategory'
import kid_banner from './Component/Assets/banner_kids.png'
import ProductDisplay from './Component/ProductDisplay/ProductDisplay'


function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/clothes' element={<ShopCategory banner={kid_banner} category="clothes" />} />
        <Route path='/nursery' element={<ShopCategory banner={kid_banner} category="nursery" />}/>
        <Route path='/nutrition' element={<ShopCategory banner={kid_banner} category="nutrition" />}/>
        <Route path='/toys' element={<ShopCategory banner={kid_banner} category="toys" />}/>
        <Route path='/contactus' element={< ContactUs/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<ProductDisplay />} />
        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<LoginSignup />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
