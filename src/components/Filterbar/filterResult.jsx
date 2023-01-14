
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllDefault from "../pages/childPages/allDefault";
import NewRelease from "../pages/childPages/newRelease";
import OtherChildPages from "../pages/childPages/otherChildPages";
import Popular from "../pages/childPages/popular";
import TodayDeal from "../pages/childPages/todayDeal";
import CustomerService from "../pages/customerService";




function FilterResult() {
  return (
    <div>
      {/* items */}


      
        
      <Routes>
     
     <Route exact path="/" element={<AllDefault/>}></Route>
     <Route exact path="Popular" element={<Popular/>}></Route> 
     <Route exact path="Today'sDeal" element={<TodayDeal/>}></Route> 
     <Route exact path="NewRelease" element={<NewRelease/>}></Route> 
     {/* other filter childPages */}
     {["Books", "Mobile","Electronics","Fashion","HomeandKitchen","Computer"].map((path, index) => {
        return (
          <Route path={path} element={
             <OtherChildPages/>
            }
            key={index}
          />
        );
      })}
    
   </Routes>
        
        
    
    </div>
  );
}

export default FilterResult;
