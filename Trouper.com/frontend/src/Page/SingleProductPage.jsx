import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./SinglePro/Nav";
import OverviewSlid from "./SinglePro/Overview";
import AboutTheSeller from "./SinglePro/AboutTheSeller";
import Reviews from "./SinglePro/Reviews";
const SingleProductPage = () => {
  const { user_id } = useParams();
  const [p, setProductDetails] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:9500/products/${user_id}`).then((res)=>res.json()).then((res) =>
      setProductDetails(res)
    );
  }, [user_id]);
  return (
    <>
      <Nav />
      <div>
        <div style={{ marginTop: "20px" }}>
          <OverviewSlid />
        </div>
        <div style={{ marginTop: "20px" }}>
          <AboutTheSeller />
        <div style={{marginTop:"20px"}} >
         
          {p.title}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Reviews />
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleProductPage;
