
import './App.css';
import  Navbar2  from './Components/Navbar2';
import { Cart } from './Page/Cart';
import { Home } from './Page/Home';
 
import { Login } from './Page/Login';
import SignUp from './Page/SignUp';
import SingleProductPage from './Page/SingleProductPage';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar2/>
       <AllRoutes/>
     <Home/>
       <SignUp/>
       <Cart/>
       <Login/>
       <SingleProductPage/>
 

    </div>
 
  );
}

export default App;
