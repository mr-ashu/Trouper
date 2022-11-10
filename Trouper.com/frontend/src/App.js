 
import './App.css';
import { Navbar } from './Components/Navbar';
import {Swipe} from './Page/admin/swipepage';
 
import { AllRoutes } from './Routes/AllRoutes';
// just for fun
function App() {
  return (
    <div className="App">
       <Navbar/>
 
        <Swipe/>

    </div>
  );
}

export default App;
