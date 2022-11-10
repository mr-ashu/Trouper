import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../Page/admin/AdminPage'
import { Cart } from '../Page/Cart'
import { Home } from '../Page/Home'
import { Login } from '../Page/Login'
import SignUp from '../Page/SignUp'
import SingleProductPage from '../Page/SingleProductPage'
// 
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
    </Routes>
  )
}
