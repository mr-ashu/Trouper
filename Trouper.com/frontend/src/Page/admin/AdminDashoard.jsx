 
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { useSelect } from '@mui/base'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SIGN_OUT } from '../../Redux/auth/admin.type'
import style from "./dashboard.module.css"

 
export const AdminDashoard = () => {
 const  {token,isAuth,user}=useSelector((store)=>store.auth)
 const [loading ,setloading]=useState(true)
 
  const [data,setData]=useState([])
 

   const navigate=useNavigate()
 
 
  
 useEffect(()=>{
  
      getCart()
 },[])

 const getCart=()=>{
  axios.get(`https://trouper-org.onrender.com/admincart`, {
    headers: {
      token: token,
    },
  }).then((res)=>{
 
      setData(res.data)
      setloading(false)
    })
 }
 
 const remove=(id)=>{
  axios.delete(`https://trouper-org.onrender.com/admincart/${id}`,{
    headers: {
      token: token,
    }
  })
  .then((res)=>{
    
    getCart()
     alert("Remove sucess")
  })
  .catch((e)=>{
    alert("Error")
  })
 }
  
if(!isAuth){
  
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
                   <div className='ainfo'>
                       <h3><Text color={"teal"} fontWeight="bold">Name:</Text> {user.name}</h3>
                       <h3> <Text color={"teal"} fontWeight="bold">Email:</Text> {user.email}</h3>
                       <h3><Text color={"teal"} fontWeight="bold">Contact:</Text> {user.contact}</h3>
                        <h3><Text color={"teal"} fontWeight="bold">Address:</Text> {user.address}</h3>
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
        <Th>Dispach date</Th>
        <Th>Earning</Th>
        <Th>Remove</Th>
      </Tr>
    </Thead>
     
      
      
      {
      loading?<div  style={{margin:"auto"}}>Loading...</div>:
      
      data?.map((el,i)=>( 
        <Tbody>
          
        <Tr>
          <Td>{i+1}</Td>
          <Td> {el.product.title} </Td>
      
          <Td>0</Td>
          <Td></Td>
          <Td>{el.product.price}</Td>
          <Td><Button onClick={()=>remove(el._id)}  _hover={{bg:"tomato" ,color:"white"}}>Remove</Button></Td>
        </Tr>
        
       
      </Tbody>
      ))
      
     }

     
    <Tfoot>
      <Tr>
        <Th color="tomato">Total={data.length}</Th>
         
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
              </div>
         </div>
     
 

    </div>
  )
}
