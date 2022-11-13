import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import SingleProductPage from "./Page/SingleProductPage";
import { AllRoutes } from "./Routes/AllRoutes";
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
