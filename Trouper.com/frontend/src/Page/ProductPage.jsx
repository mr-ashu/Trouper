 
 
import React, { useEffect, useState } from 'react'
import { Box, Container, Image , SimpleGrid, Text , Stack , Img, Spacer, FormLabel, FormControl , Select, Button} from '@chakra-ui/react'

const getApiData = () =>{
    return fetch("http://localhost:9500/products").then((res)=> res.json())
  }

function ProductPage() {

    const[showData , setShowData] = useState([])

    useEffect(()=>{
        getApiData().then((res)=>{
         
        setShowData(res)
        })
    },[])

  const x=()=>{
      let filt=showData.filter((el)=>el.category="developer").map((el)=>{
        setShowData()
      })
  }
      

 return (
     <>
     <h1>Product</h1>
      <SimpleGrid border="1px solid"  minChildWidth="250px" spacing="20px"  width="70%" ml="320px" mt="-400px">
        {showData &&
           showData.map((elem , index) => (
            <Stack textAlign="center"  key={index}>
              <Box>
              <Img src={elem.image} />
              <Text color = "green" fontWeight="700" fontSize="13px" > {elem.salery} </Text>
               <Text fontWeight="750" fontSize="14px" > {elem.name} </Text>
                <Text > {elem.name} </Text>
                <Text> {`Rs ${elem.price}`} </Text>
                <Text> {elem.offer} </Text>
                {/* <Button width="150px" height="30px" color="skyblue" >Cart</Button> */}
              </Box>
            </Stack>
          ))}
       
      </SimpleGrid> 
     </>
 
  )
}

  export default ProductPage



// const getApiData = (url) =>{
//     return fetch(url).then((res)=> res.json())
//   }

// const[showData , setShowData] = useState([])
// useEffect(()=>{
//   getApiData(`http://localhost:9500/products`).then((res)=>{
//     setShowData(res.data)
//   },[])
 
