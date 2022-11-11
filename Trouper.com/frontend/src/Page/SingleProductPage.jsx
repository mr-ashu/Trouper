import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "./SinglePro/Nav";
import OverviewSlid from "./SinglePro/Overview"
import AboutTheSeller from "./SinglePro/AboutTheSeller"
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleProductPage = () => {
  const { user_id } = useParams();
  const [productDetails, setProductDetails] = React.useState([]);

  React.useEffect(() => {
    getData(`https://reqres.in/api/users/${user_id}`).then((res) =>
      setProductDetails(res.data)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <Navigation/>
      <div>
        <div>
          <OverviewSlid />
        </div>
        <div>
          <AboutTheSeller />
        </div>
      </div>
      <Link to="">GO BACK</Link>
    </>
  );
};

export default SingleProductPage;
