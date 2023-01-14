import {Routes,Route} from 'react-router-dom';
import AllProducts from './allProducts';
import CustomerService from './customerService';


function PagesRoutes() {
   
    return ( <div>
        
       <Routes>
        <Route  path='/All' element={<AllProducts/>}></Route>
        <Route  exact path='/Customer%20Service' element={<CustomerService/>}></Route>
       </Routes>
    </div> );
}

export default PagesRoutes;