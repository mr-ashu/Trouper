
import './App.css';
import { Navbar } from './Components/Navbar';
import SingleProductPage from './Page/SingleProductPage';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App"><Navbar/><AllRoutes/><SingleProductPage/>
    </div>
  );
}

export default App;
