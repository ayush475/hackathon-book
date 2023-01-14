import { Link } from "react-router-dom";

const bottomHeaderItems = [
  "All",
"Popular",
  "Today's Deal",
  "Mobile",
  "Customer Service",
  "Books",
  "Electronics",
  "Fashion",
  "Home and Kitchen",
  "New Release",
  "Computer",
];

function Slider(props) {
  const {setViewMode,viewMode}=props;
  const toggleDarkMode=(e)=>{
  if(e.target.value=="light"){
    setViewMode('dark');
  }else{
    setViewMode("light");
  }
  }

    return ( <div>
          <div>
        
       
        {/* drawer component */}
        <div id="drawer-disabled-backdrop" className="fixed z-[100] h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full" tabIndex={-1} aria-labelledby="drawer-disabled-backdrop-label" aria-hidden="true">
          <h5 id="drawer-disabled-backdrop-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
          <button type="button" data-drawer-dismiss="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <div className=" flex flex-col justify-start space-y-2">
            <div className=" flex lg:flex gap-2 items-center px-2  w-28 translate-tighter cursor-pointer dark:text-white ">
            Mode
          
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={viewMode==="dark"?true:false}
                  defaultValue={viewMode}
                  id="default-toggle"
                  className="sr-only peer"
                  onChange={toggleDarkMode}

                />
               
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label>
          
          </div>
             
              <button
              type="button" data-drawer-dismiss="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop">
                <Link to={'/Dashboard'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </button>

              {
                bottomHeaderItems.map((item,index)=>{

                  if (item=="All") {
                    return<button
                    className="flex"
                    key={index}
                    type="button" data-drawer-dismiss="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop">
                     
                     <Link to={`/Products/${item}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      
                      <span className="flex-1 ml-3 whitespace-nowrap">{item}</span>
                     
                    </Link>
                    </button>

                    
                  }

                  if (item=="Customer Service") {
                    return<button
                    className="flex"
                    key={index}
                    type="button" data-drawer-dismiss="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop">
                     
                     <Link to={`/${item.replace(/\s+/g,"")}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      
                      <span className="flex-1 ml-3 whitespace-nowrap">{item}</span>
                     
                    </Link>
                    </button>

                    
                  }


                 return<button
                 className="flex"
                 key={index}
                 type="button" data-drawer-dismiss="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop">
                  
                  <Link to={`/Products/All/${item.replace(/\s+/g,'')}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   
                   <span className="flex-1 ml-3 whitespace-nowrap">{item}</span>
                  
                 </Link>
                 </button>
                  
                })
              }
             
             
             
             
            
              {/* <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" /></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li> */}
            </div>
          </div>
        </div>
      </div>
       
    </div>);
}

export default Slider;