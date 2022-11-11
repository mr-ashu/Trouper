import React from 'react';
import "./freelancer.css";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const Freelancer = () => {
  return (
    <div>
       <div className='freelancer'>
           <div className='left2'>
              <h2 className='second2'>A whole world of freelance</h2>
              <h2 className='second2'>talent at your fingertips</h2>
              <p className='third2'><CheckCircleIcon mr="8px"/> Connect to freelancers with proven business experience</p>
              <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              <p className='third2' ><CheckCircleIcon mr="8px" /> Connect to freelancers with proven business experience
                 Get matched with the perfect talent by a customer success manager</p>
              <p>Find the right freelancer to begin working on your project within minutes.</p>
              <p className='third2' ><CheckCircleIcon mr="8px" /> Manage teamwork and boost productivity with one powerful workspace</p>
              <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
              <p className='third2' ><CheckCircleIcon mr="8px" /> 24/7 support</p>
              <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
              
           </div>
           <div className='right2'>
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"/>
           </div>
       </div>
    </div>
  )
}