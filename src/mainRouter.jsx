import { Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import MyCart from "./components/Cart/myCart";
import ProductDetailsClient from "./components/client/productDetailsClient";
import Dashboard from "./components/dashboard/dashboard";
import Kanban from "./components/dashboard/Kanban";
import Home from "./components/home/home";
import AllProducts from "./components/pages/allProducts";
import CustomerService from "./components/pages/customerService";
import Sell from "./components/pages/sell";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Events from "./components/pages/Events";

function MainRouter() {

  

    
    return ( <div className="dark:bg-gray-700 min-h-screen dark:text-white">
        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/SignIn' element={<SignIn/>}></Route>
        <Route exact path='/SignUp' element={<SignUp/>}></Route>
        <Route exact path='/MyCart' element={<MyCart/>}></Route>
        <Route exact path='/Products/Customer%20Service' element={<CustomerService/>}></Route>
        <Route exact path="/events" element={<Events/>}></Route>
     
        <Route exact path='/Product/123' element={<ProductDetailsClient/>}></Route>
        <Route exact path='/CustomerService' element={<CustomerService/>}></Route>
        <Route exact path='/Products/All/*' element={<AllProducts/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        
        <Route exact path='/Portfolio' element={<Portfolio/>}></Route>

{/* admin Routes */}
        
        <Route  path='/Dashboard/*' element={<Dashboard/>}></Route>
      
        </Routes>
      </div> );
}

export default MainRouter;