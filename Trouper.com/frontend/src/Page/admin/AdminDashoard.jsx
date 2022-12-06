 
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { useSelect } from '@mui/base'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SIGN_OUT } from '../../Redux/auth/admin.type'
import style from "./dashboard.module.css"

const getData=(token)=>{
  return axios.get(`https://trouper-org.onrender.com/admincart`,{
    headers:token
  })
}
export const AdminDashoard = () => {
 const store=useSelector((store)=>store.auth)
 
 
  const [data,setData]=useState([])
 

   const navigate=useNavigate()
   const token=store.token
 
  
 useEffect(()=>{
    
    getData(token).then((res)=>{
    console.log(res);
      setData(res.data)
    })
 },[])
console.log(data);
  
if(!store.isAuth){
  
  navigate("/admin")

}
 
 
  return (
    <div className={style.dashboard}>
        <Text fontSize="xl" fontWeight="bold" padding="20px" >DASHBOARD</Text>
       
         <div className={style.infogrid} >
             <div className={style.profile}>
                       <div  style={{alignItems:"center",justifyContent:"center",textAlign:"center" }}>
                       <img   src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png" alt="" />
 
                          <div style={{display:"flex" ,gap:"20px" ,width:"fit-content",margin:"auto"}}>
                                   
                                    
                                    <Link to="/join">
                                    <Button 
                                      border="none" 
                                      background="#22C35E" 
                                      color="white"  
                                      _hover={{ bg: 'transparent', color:"#22C35E" ,border:"1px solid #22C35E"}} 
                                      _active={{ bg: 'none',}}   
                                      fontSize="16px"  
                                      padding="12px 22px" 
                                    
                                       alignSelf="center"

                                        >Create Gig
                                        
                                    </Button>
                                    </Link>
                          </div>
                         

                       </div>
                   <div>
                       <h3>Name: {store.user.name}</h3>
                       <h3>Email: {store.user.email}</h3>
                       <h3>Contact: {store.user.contact}</h3>
                        <h3>Address: {store.user.address}</h3>
                   </div>
                    
             </div>
        
             <div className={style.table}>
    <TableContainer display="block"  maxWidth="100%" >
  <Table  variant='striped' colorScheme='teal'>
    
    <Thead fontSize="md">
      <Tr>
        <Th >Sr. no.</Th>
        <Th>Product</Th>
        <Th>order</Th>
        <Th>Like</Th>
        <Th>Dispach date</Th>
        <Th>Earning</Th>
      </Tr>
    </Thead>
     {

      data?.map((el)=>( 
        <Tbody>
        <Tr>
          <Td> </Td>
          <Td> {el.product.title} </Td>
          <Td> </Td>
          <Td></Td>
          <Td></Td>
          <Td>{el.product.price}</Td>
        </Tr>
        
       
      </Tbody>
      ))
     }
    <Tfoot>
      <Tr>
        <Th>Total</Th>
        <Th></Th>
        <Th ></Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
              </div>
         </div>
     
 

    </div>
  )
}
