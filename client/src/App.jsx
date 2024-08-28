import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SellerDashBoard from "./pages/SellerDashBoard"
import BuyerDashboard from "./pages/BuyerDashboard"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/sellerdashbord" element={<SellerDashBoard/>}/>
            <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
          </Routes>
          <Footer />
       </BrowserRouter>
    </>
  )
}

export default App
