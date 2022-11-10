
import './App.css';
import { Navbar } from './Components/Navbar';
 
import { Cart } from './Page/Cart';
import { Home } from './Page/Home';
 
import { Login } from './Page/Login';
import SignUp from './Page/SignUp';
import SingleProductPage from './Page/SingleProductPage';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRoutes/>
       <SingleProductPage/>
 

    </div>
 
  );
}

export default App;
