import { useEffect, useState } from "react";
import Carousel from "../carousel/carousel";
import MyCartTable from "./myCartTable";

function MyCart() {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e, action) => {
      if (action == "increment") {
        setQuantity(quantity + 1);
      } else if (action == "decrement") {
        setQuantity(quantity - 1);
      }
    };
    // validate quantity
    useEffect(() => {
      if (quantity < 1) {
        setQuantity(1);
      }
  
      if (quantity > 100) {
        setQuantity(100);
      }
    }, [quantity]);
  
    return (
      <div>
         
        {/* productDetails cart */}
        <div className=" flex  pt-2 pr-2 pl-2  flex-col md:flex-row ">
      
         <div className="flex-1">
         
         <MyCartTable/>
         </div>

         
          {/* order part */}
          <div className="p-6 w-full md:max-w-sm bg-slate-200 border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
            <h5 className="mb-4 text-lg tracking-wide font-bold  text-gray-900 dark:text-white">
              Delivery
            </h5>
            <p className=" flex-1 flex-wrap mb-3 gap-2 text-xs text-gray-700 dark:text-gray-400">
                  (Select multiple items and checkout to order multiple items at once)
                </p>
            <div className="flex mt-1 mb-1">
              <div className="w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className=" flex-1 break-all mb-3 gap-2 font-normal text-gray-700 dark:text-gray-400">
                  Salinadi Road,Sankhu,Kathmandu
                </p>
                
                <button className="mb-3 max-w-min gap-2 font-bold text-blue-600 hover:text-blue-700 ">
                  Change
                </button>
              </div>
            </div>
  
            {/* phone no */}
            <div className="flex mt-1 mb-1">
              <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
  
              </div>
              <div className="flex w-full justify-between">
                <div>
                <p className="  font-semibold text-gray-700 dark:text-gray-400">
                  Contact No
                </p>
                <p className=" flex-1 flex-wrap mb-3 gap-2 font-normal text-gray-700 dark:text-gray-400">
                 9869194591
                </p>
                </div>
               
                <button className="mb-3 max-w-min gap-2 font-bold text-blue-600 hover:text-blue-700 ">
                  Change
                </button>
              </div>
            </div>
  
            <div className="flex mt-1 mb-1">
              <div className="w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>  
              </div>
              <div className="flex w-full  justify-between">
                <div className="flex flex-1 flex-col">
                <p className=" flex-1 flex-wrap  gap-2 font-semibold text-gray-700 dark:text-gray-400">
                  Transportation Charge
                </p>
                <p className=" flex-1 flex-wrap mb-3 gap-2 text-xs text-gray-700 dark:text-gray-400">
                  (4 days)
                </p>
                </div>
                
                <p className="   mb-3  font-lg font-bold text-gray-700 dark:text-gray-400">
                  Nrs.500
                </p>
               
              </div>
            </div>
  
  
  
            {/* cash on delivery  */}
  
            <div className="flex mt-1 mb-1">
              <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
  
              </div>
              <div className="flex w-full justify-between items-center">
              <p className="  font-semibold text-gray-700 dark:text-gray-400">
                 Only Cash On Delivery Available
                </p>
                
              
              </div>
            </div>
  {/* total price */}
  
  <div className="flex mt-3 mb-1">
              
              <div className="flex w-full  justify-between">
                <div className="flex flex-1 flex-col">
                <p className=" flex-1 text-xl  gap-2 font-bold text-black  dark:text-white">
                  Total Price
                </p>
                <p className=" flex-1 flex-wrap mb-3 gap-2 text-xs text-gray-700 dark:text-gray-400">
                  (Items:3)
                </p>
                </div>
                
                <p className="   mb-3  font-lg font-bold text-green-600 dark:text-green-400">
                  Nrs.{quantity*20000+500}
                </p>
               
              </div>
            </div>
  
          {/* check out */}
          <button className="text-white   w-full m-2 mb-0 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">
                  Check Out Now
                </button>
          </div>
        </div>
  
       
  
     <div>
     <h2 className="text-2xl font-semibold leading-tight dark:text-white mt-2 mb-2 ml-2">
              Find More Products
            </h2>
      <Carousel/>
     </div>
  
       
      </div>
    );
  }

export default MyCart;