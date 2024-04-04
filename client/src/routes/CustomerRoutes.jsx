import React from 'react'
import Navbar from '../customer/components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from '../customer/pages/Home'
import Cart from '../customer/components/cart/Cart'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/products/Product'
import ProductDetails from '../customer/components/productDetails/ProductDetails'
import DeleveryAddressForm from '../customer/components/checkout/DeleveryAddressForm'
import OrderSummary from '../customer/components/checkout/OrderSummary'
import CheckOut from '../customer/components/checkout/CheckOut'
import Order from '../customer/components/order/Order'
import BolliwoodMovie from '../customer/components/products/BolliwoodMovie'
import HolliwoodMovie from '../customer/components/products/HolliwoodMovie'
import SouthMovie from '../customer/components/products/SouthMovie'
function CustomerRoutes() {
  return (
    <div>
      <div>
      
      {/* <CheckOut /> */}
      {/* <Order /> */}
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:level1/:leve2/:level3' element={<Product/>}></Route>
        <Route path='/bolliwood/:level1' element={<BolliwoodMovie/>} ></Route>
        <Route path='/holliwood/:level1' element={<HolliwoodMovie/>} ></Route>
        <Route path='/south/:level1' element={<SouthMovie/>} ></Route>
        <Route path='/product/:level1/:mvName' element={<ProductDetails/>}></Route>
        <Route path='/deleveryAddress' element={<DeleveryAddressForm/>}></Route>
        <Route path='/checkout' element={<CheckOut/>} ></Route> 
        <Route path='/GiveReview'element={<DeleveryAddressForm/>} ></Route> 
         {/* in above  based on params the address form(which contaiins addresses also) or order summery page will get displayd */}
        <Route path='/product/order' element={<Order/>} ></Route>


      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
