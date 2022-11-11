import React from 'react'
import { Slider } from './Home/Slider';
import { Guide } from './Home/Guide';
import { Talent } from './Home/Talent';
import { Business } from './Home/Business';
import { Freelancer } from './Home/Freelancer';
import { MarketPlace } from './Home/MarketPlace';
export const Home = () => {
  return (
    <div>

       <Slider />
       <Freelancer />
      {/*  <MarketPlace /> */}
       <Business />
       <Guide />
       <Talent />
    </div>
  )
}
