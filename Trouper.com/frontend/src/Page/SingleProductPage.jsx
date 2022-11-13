import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./SinglePro/Nav";
import OverviewSlid from "./SinglePro/Overview"
import AboutTheSeller from "./SinglePro/AboutTheSeller"
import Reviews from "./SinglePro/Reviews";
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };

const SingleProductPage = () => {
  const { user_id } = useParams();
  const [p, setProductDetails] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:9500/products/${user_id}`).then((res)=>res.json()).then((res) =>
      setProductDetails(res)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <Nav/>
      <div>
        <div style={{marginTop:"20px"}} >
          <OverviewSlid />
        </div>
        <div style={{marginTop:"20px"}} >
         
          {p.title}
        </div>
        <div style={{marginTop:"20px"}} >
          <Reviews />
        </div>
      </div> 
      {/* <Link to="">GO BACK</Link> */}
    </>
  );
};

export default SingleProductPage;
