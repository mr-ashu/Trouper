import React from "react";
import {Box} from "@chakra-ui/react"
import ReactStarRating from "react-star-rating-component";
const Rating = () => {
  let sum = <ReactStarRating/>*2
  console.log(sum)
  return (
    <Box justifyContent="left" ml="-45px">
      <ReactStarRating
        numberOfStar={5}
        numberOfSelectedStar={2}
        colorFilledStar="yellow"
        colorEmptyStar="black"
        starSize="20px"
        spaceBetweenStar="10px"
        disableOnSelect={false}
        onSelectStar={(val) => {
          console.log(val);
        }}
      /><span style={{color:"grey",marginTop:"-20px"}}>{`(106 reviews)`}</span>
    </Box>
  );
};

export default Rating;
