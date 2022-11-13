import React from 'react'
import { Link } from 'react-router-dom'
import "./admin.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { red } from '@mui/material/colors';


export const AdminIntro = () => {
  return (
    <div className='bigBag'> 
        
          <video className='autovideo' autoPlay loop muted preload='auto' src='https://sg.fiverrcdn.com/packages_lp/cover_video.mp4' width="auto" height="auto"><img src="" alt="" /></video>
        

        <div className='smallbull'>
              
              
        <div className='videotext'>
           <div className='txtspan'>
           <h1>Work Your Way</h1>
           <p>Your bring the skill. We'll make earning easy.</p>
           <Link to="/join">Become a Seller</Link>
           </div>
         </div>
        
       
       <div className='pgridbox'>
              <h3 className='haderh3'>Join our growing freelance community</h3>
        <div className='pgrid'>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/be9e63fa588288b35991ed8e8c6550d9-1614861018529/designer.jpg" alt="" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/699482a05db770305ba6f2fc7139b98a-1614861401148/developer.jpg" alt="" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/be9e63fa588288b35991ed8e8c6550d9-1614861018521/video.jpg" alt="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/cfe8db680cc2a8abc1b1e9b755011a4f-1614863917639/writer.jpg" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/be9e63fa588288b35991ed8e8c6550d9-1614861018522/musician.jpg" alt="" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/cfe8db680cc2a8abc1b1e9b755011a4f-1614863917639/writer.jpg" alt="" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/be9e63fa588288b35991ed8e8c6550d9-1614861018521/voiceover.jpg" alt="" /></div>
             <div><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/699482a05db770305ba6f2fc7139b98a-1614861401146/analyst.jpg" alt="" /></div>
             <span className='ltext'> 
                 <FavoriteIcon fontSize='large' sx={{color:red[500]}}/>
                 <h3>What's Your Skill?</h3>
                 <Link to="/join">Become a Seller</Link>
             </span>
        </div>

       </div>
      <div className='extrabox'>
           <h2 className='extrah2'>How it works</h2>
      <div className='extra'>
              <div>
              
                <h3>
                <AssignmentIcon fontSize='large' />
                <br />
                    "1. Create a Gig"
                </h3>
                <p>Sign up for free, set up your Gig, and offer your work to our global audience.</p>
                </div>
              <div>
             
                <h3>
                <MailOutlineIcon fontSize='large' />
                <br />
                    "2. Deliver great work"
                </h3>
                <p>
                    "Get notified when you get an order and use our system to discuss details with customers."
                </p>
              </div>
              <div>
                <AssignmentTurnedInIcon fontSize='large'/>
                <h3>
                    "3. Get paid"
                </h3>
                <p>
                    "Get paid on time, every time. Payment is available for withdrawal as soon as it clears."
                </p>
              </div>
      </div>
      </div>
      
      
      <div className='byer'>
        <h2 className='byerh2'>Buyer stories</h2>
           <div className='gridByer'>
                   <div>
                    
                    <img src="https://assetsv2.fiverrcdn.com/assets/v2_photos/start-selling-new/buyer_thumbnail/x1/gore-1f4172b427d8f9e235315a4bef0005ba.jpg" alt="" />
                     
                   </div>
                   <div className='byertext'>
                          <p>"There is no way I could have produced anything without Fiverr."</p>
                     
                          <p>Christopher Sunami, Music Producer</p>
                    </div>
                   <div>
                    
                    <img src="https://assetsv2.fiverrcdn.com/assets/v2_photos/start-selling-new/buyer_thumbnail/x1/mashal-33f872c49bcda0de9f8885221576da31.jpg" alt="" />
                     
                          
                   </div>
                   <div className='byertext'>
                           <p>"Fiverr is an amazing resource for anyone in the startup space."</p>
                          
                          <p>Adam Mashaal, CEO of Mashfeed</p>
                  </div>
                  <div className='byertext'>
                       <p>"People love our logo, and we love Fiverr."</p>
                
                        <p>Jennifer Gore, CEO of Weleet</p>
                 </div>

                   <div>
                 
                  
                    <img src="https://assetsv2.fiverrcdn.com/assets/v2_photos/start-selling-new/buyer_thumbnail/x1/sunami-267bb7f3aef30a93da28c53c9b1e360d.jpg" alt="" />
        
                   </div>
                   <div className='byertext'>
                        
                        <p>"People love our logo, and we love Fiverr."</p>
                        <p>Jennifer Gore, CEO of Weleet</p>
                       </div>
                   <div>
                 

                    <img src="https://assetsv2.fiverrcdn.com/assets/v2_photos/start-selling-new/buyer_thumbnail/x1/dolan-abb0849dca439bdcdc477b1f77ab9a68.jpg" alt="" />
                  
                   </div>
           </div>
      </div>

        </div>
 


    </div>
  )
}
