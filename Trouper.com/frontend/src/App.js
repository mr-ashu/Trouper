 
import './App.css';
import { Navbar } from './Components/Navbar';
import SignUp from './Page/SignUp';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRoutes/>
      <SignUp />
    </div>
  );
}

export default App;
