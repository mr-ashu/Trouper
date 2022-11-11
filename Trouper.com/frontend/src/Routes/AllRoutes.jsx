import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payment from '../Page/Payment'
// 
export const AllRoutes = () => {
  return (
     <Routes>
          <Route to="/payment" element={<Payment/>}/>
     </Routes>
  )
}
