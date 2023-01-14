import { useEffect, useState } from "react";
import profileDemoImage from "../../demoImages/zoroProfile.jpg";
import Review from "../Review/review";
import UserHistoryTable from "./Tables/userHistoryTable";

function UserAdminDetails() {
  
 

  return (
    <div>
      {/* productDetails */}
      <div className=" flex pt-2 pr-1 pl-1  flex-col md:flex-row ">
        <div className="   flex-1   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex    flex-col lg:flex-row ">
            <div className="xs:max-w-xs  md:max-w-sm bg-white border-none dark:bg-gray-800 ">
              <img src={profileDemoImage} className="object-fill   " />
            </div>

            <div className="p-6 w-full min-w-sm flex-1  bg-white bordershadow-md dark:bg-gray-800 ">
             
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jagadish Shrestha
              </h5>
        

              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Email : Jagadish.sta@gmail.com
              </p>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Role : User
              </p>
              <p className=" font-normal text-gray-700 dark:text-gray-400">
                Created At:2022-4-21
              </p>
              
              <div className="flex   flex-col sm:flex-row justify-between mt-6 items-center p-2">
                <button className="text-white   w-full mr-2  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-blue-800">
                  Delete
                </button>

                <button className="text-white w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* order part */}
        <div className="p-6 w-full md:max-w-sm bg-slate-200 border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
          <h5 className="mb-4 text-lg tracking-wide font-bold  text-gray-900 dark:text-white">
            Recent Details
          </h5>

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

         



          {/* cash on delivery  */}

          
{/* total purchase */}

<div className="flex mt-3 mb-1">
            
            <div className="flex w-full  justify-between">
              <div className="flex flex-1 flex-col">
              <p className=" flex-1 text-xl  gap-2 font-bold text-black  dark:text-white">
                Total Purchase
              </p>
             
              </div>
              
              <p className="   mb-3  font-lg font-bold text-green-600 dark:text-green-400">
                Nrs.5650000
              </p>
             
            </div>
          </div>

        
        </div>
      </div>

      {/* product brought */}
      <div className=" w-full    bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        User history
        </h5> */}
       <UserHistoryTable/>
      </div>

 

    
    </div>
  );
}

export default UserAdminDetails;
