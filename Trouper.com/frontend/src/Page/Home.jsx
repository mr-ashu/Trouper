import React from 'react'
import { Slider } from './Home/Slider';
import { Guide } from './Home/Guide';
import { Talent } from './Home/Talent';
import { Business } from './Home/Business';
import { Freelancer } from './Home/Freelancer';
import { MarketPlace } from './Home/MarketPlace';
import { LogoMaker } from './Home/LogoMaker';
import { Viewed } from './Home/Viewed';
import { Services } from './Home/Services';
export const Home = () => {
  return (
    <div>

       <Slider />
       <Viewed />
       <Services />
       <Freelancer />
      <MarketPlace /> 
       <Business />
       <LogoMaker />
       <Guide />
       <Talent />
    </div>
  )
}
