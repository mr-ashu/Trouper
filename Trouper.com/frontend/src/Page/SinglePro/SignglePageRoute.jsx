import { Route, Routes } from "react-router-dom"
import AboutTheSeller from "./AboutTheSeller"
import OverviewSlid from "./Overview"

function SinglePageNavRoutes(){
 
  return(
    <>
     <Routes>
        <Route path="./about" element={<AboutTheSeller/>} />
        <Route path="./overview" element={<OverviewSlid/>} />
        {/* <Route path="" element={</>} /> */}
     </Routes>
    </>
  )

}
export default SinglePageNavRoutes