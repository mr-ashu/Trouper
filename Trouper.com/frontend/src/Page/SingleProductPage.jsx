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
  const { user_id } = useParams();
  const [productDetails, setProductDetails] = React.useState([]);

  React.useEffect(() => {
    getData(`http://localhost:9500/products/${user_id}`).then((res) =>
      setProductDetails(res.data)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <Nav />
      <div>
        <div style={{ marginTop: "20px" }}>
          <OverviewSlid />
        </div>
        <div style={{ marginTop: "20px" }}>
          <AboutTheSeller />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Reviews />
        </div>
      </div>
      {/* <Link to="">GO BACK</Link> */}
    </>
  );
};

export default SingleProductPage;
