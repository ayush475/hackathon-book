import React, { useState } from "react";
import { FaBars, FaHome, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Items, SubItems } from "./NItems";
import Search from "./Search";
import DarkModeToggle from "../components/header/DarkModeToggle";
const Snav = () => {
  const [open, setopen] = useState(false);
  const [test, settest] = useState(false);
  return (
    <div>
      <nav className=" flex   sticky flex-row justify-between items-center w-[100%] bg-black mx-auto">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <FaHome size={30} />
          <div className="pt-[6px] md:hidden" onClick={() => setopen(!open)}>
            {open ? <FaClock /> : <FaBars />}
          </div>
        </div>
        <div className="  bg-black">
          <ul className="md:flex  hidden  flex-row md:items-center md:gap-[4vw] gap-6">
            {Items.map((list, index) => (
              <li
                key={index}
                onMouseEnter={index === 1 ? () => settest(true) : null}
                onMouseLeave={index === 1 ? () => settest(false) : null}
                className="hover:text-red-500 hover:underline text-white peer"
              >
                <Link to={list.to}>{
                    
                   list.item=='Services'?( 
                     <div>
                    <button class="peer px-5 py-2 hover:text-red-500 hover:underline text-white">
                      Services 
                    </button>
            
                    {/* <!-- the menu here --> */}
                    <div
                      class="hidden absolute peer-hover:flex hover:flex
                     w-[200px]
                     flex-col bg-white text-black drop-shadow-lg"
                    >
                      <a class="px-5 py-3 hover:bg-gray-800 hover:text-white" href="#">
                        About Us
                      </a>
                      <a class="px-5 py-3 hover:bg-gray-800  hover:text-white" href="#">
                        Contact Us
                      </a>
                      <a class="px-5 py-3 hover:bg-gray-800  hover:text-white" href="#">
                        Privacy Policy
                      </a>
                    </div>
                  </div>):(<div>{list.item}</div>)
                }
                </Link>
              </li>
            ))}
          </ul>
       
       
          {settest && (
            <div className=" hidden md:block px-[110px]">
              <ul className="hidden peer-hover:flex hover:flex
         w-[200px]">
                {SubItems.map((list, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 hover:underline text-white"
                  >
                    <Link to={list.to}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* this is for hover services */}
      

        <div className="hidden md:flex">
          <Search />
          <DarkModeToggle />
          <button className=" text-white ml-0 mr-2 px-5 py-2   hover:outline-box">
            {" "}
            sign in
          </button>
        </div>
      </nav>
      {/* <div className='md:block' >
                    <ul className=''>
                    {SubItems.map((list,index)=>
                    <li key={index} className="hover:text-red-500 hover:underline text-white">
                    <Link to={list.to}>{list.name}</Link>
                    </li>
                    )}
                    </ul>
                </div> */}
      {/* yo chai mobile navbar ho hai */}
      <nav>
        <ul
          className={` relative md:hidden bg-black text-white  w-1/2 h-full bottom-0 py-0 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <DarkModeToggle />
          <div className="text-left ml-0">
            <Search />
          </div>
          {Items.map((list, index) => (
            <li key={index} className=" px-3  py-4 text-left md:cursor-pointer">
              <Link to={list.to} className="py-7">
                {list.item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

     
    </div>
  );
};

export default Snav;
