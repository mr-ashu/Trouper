 
import React from 'react'
 
import { Route, Routes } from 'react-router-dom'
import Payment from '../Page/Payment'
 
import { AdminPage } from '../Page/admin/AdminPage'
import { Cart } from '../Page/Cart'
import { Home } from '../Page/Home'
import  Login  from '../Page/Login'
import SignUp from '../Page/SignUp'
import SingleProductPage from '../Page/SingleProductPage'
import ProductPage  from '../Page/ProductPage'
import AdminForm from '../Page/admin/AdminForm'
import Sucess from "../Page/Sucess";
import { AdminDashoard } from '../Page/admin/AdminDashoard'
   






export const AllRoutes = () => {
  return (
    <Routes>
 
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route path="/payment/:id" element={<Payment/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path="/join" element={<AdminForm/>}/>
      <Route path="/sucess" element={<Sucess />} />
       <Route path="/dashboard" element={<AdminDashoard/>}/>
    </Routes>
  );
};
