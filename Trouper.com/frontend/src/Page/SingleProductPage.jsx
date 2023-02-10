import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./SinglePro/Nav";
import OverviewSlid from "./SinglePro/Overview";
import AboutTheSeller from "./SinglePro/AboutTheSeller";
import Reviews from "./SinglePro/Reviews";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleProductPage = () => {
  const {id} = useParams();
  
  const [productData, setProductDetails] = React.useState([]);

  React.useEffect(() => {
    getData(`https://trouper-org.onrender.com/products/${id}`).then((res) =>
    setProductDetails(res)
    );
  }, [id]);

 
  return (
    <>
      <Nav />
      <div>
 
        <div style={{marginTop:"20px"}} >
          <OverviewSlid title={productData.title}  price={productData.price} rtig={productData.rating} occupation={productData.occupation} id={id} />
        </div>

        <div style={{marginTop:"20px"}} >
         <AboutTheSeller profilePic={productData.profilePic} name={productData.name} rating={productData.rating} description={productData.description} />
          
        </div>
 
        <div style={{marginTop:"20px"}} >
          <Reviews rat={productData.rating}  />
        </div>
     
      </div>
    </>
 
 )



}
export default SingleProductPage;