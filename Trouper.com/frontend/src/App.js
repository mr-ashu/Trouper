
import './App.css';
import { Navbar } from './Components/Navbar';
import Payment from './Page/Payment';
import SingleProductPage from './Page/SingleProductPage';
import { AllRoutes } from './Routes/AllRoutes';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       {/* <AllRoutes/> */}
       {/* <SingleProductPage/> */}
       <Payment/>
    </div>
 
  );
}

export default App;
