import { Fragment, useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import Select from "react-select";
import MultiRangeSlider from "../Filterbar/slider/multiRangeSlider";



const categoryList = [
    {value:"Electronics",label:"Electronics"},
    {value:"Cameras",label:"Cameras"},
    {value:"Laptops",label:"Laptops"},
    {value:"Accessories",label:"Accessories"},
    {value:"Headphones",label:"Headphones"},
    {value:"Food",label:"Food"},
    {value:"Books",label:"Books"},
    {value:"Clothes/Shoes",label:"clothes/Shooes"},
    {value:"Beauty/Health",label:"Beauty/Health"},
    {value:"Sports",label:"Sports"},
    {value:"Outdoor",label:"Outdoor"},
    {value:"Home",label:"Home"},
  ];

  

  const customStyles = {
    container: provided => ({
      ...provided,
      width: "w-full"
    }),
    menu: (base) => ({
      ...base,
      width: "max-content",
      minWidth: "100%",
 }),
 control: (base, state) => ({
  ...base,
  border: state.isFocused ? 0 : 0,
  // This line disable the blue border
  boxShadow: state.isFocused ? 0 : 0,
  '&:hover': {
     border: state.isFocused ? 0 : 0
  }
})
  };
  const brandList = [
    {value:"Samsung",label:"Samsung"}, 
    {value:"Redmi",label:"Redmi"},
     {value:"One plus",label:"One plus"}];


export default function FilterDialog(props) {
  const [open, setOpen] = useState(false);
  const { filterDialogOpen, setFilterDialogOpen } = props;
  const [brand,setActiveBrand]=useState("All");

 const  viewMode=localStorage.getItem("tokariViewMode");

  const[category,setCategory]=useState("All");
    const handleCategoryChange=(item)=>{
        setCategory(item.value);
        console.log(item.value);
       }
       const handleBrandChange=(item)=>{
        setActiveBrand(item.value);
        console.log(item.value);
       }
  // to get mode as modal need to read mode as it is rendered otherwise it doesnnot work
  const darkRef = useRef(null);

  const handleConfirmsearch = () => {
    setFilterDialogOpen(false);
   
  };

  // useEffect(()=>{
  // const  viewMode=localStorage.getItem("tokariViewMode");
  // if( darkRef.current && viewMode=="dark"){
  //   darkRef.current.classList.add('dark');
  //   console.log(darkRef);
  // }

  // },[darkRef.current])

  return (
    <div>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog
        open={true}
        handler={(e) => setFilterDialogOpen(false)}
        // animate={{
        //   mount: { scale: 1, y: 0 },
        //   unmount: { scale: 0.9, y: -100 },
        // }}
  className={`${viewMode} backdrop-blur-sm bg-white/30 text-black dark:text-white dark:bg-gray-800 dark:border-gray-800 h-screen`}
        // className=" backdrop-blur-sm bg-white/30 text-black dark:text-white dark:bg-gray-800 dark:border-gray-800 h-screen "
      >
        <DialogHeader className=" bg-white dark:text-white dark:bg-gray-800">
      Filter
        </DialogHeader>
        <DialogBody divider className=" flex flex-col gap-4 bg-white dark:bg-gray-800 dark:text-white">
          <div className="w-full">
          <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Category
              </label>
              <div className=" border border-gray-400 rounded">
              <Select
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              styles={customStyles}
              value={{ label: category }}
              onChange={handleCategoryChange}
              
              options={categoryList}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
              </div>
           
          </div>
          <div className="w-full">
          <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <div className="m-4 mt-8">
              <MultiRangeSlider />
              </div>
          
            
          </div>

          <div className="w-full">
          <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Brand/Seller
              </label>
              <div className=" border border-gray-400 rounded">
              <Select
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              styles={customStyles}
              value={{ label: brand }}
              onChange={handleBrandChange}
              options={brandList}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
                </div>
            
          </div>
          {/* <div className="p-6 w-screen bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <svg className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /></svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
          See our guideline
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </a>
      </div> */}
        </DialogBody>
        <DialogFooter className="bg-white dark:bg-gray-800 dark:text-white">
          <Button
            variant="text"
            color="red"
            onClick={(e) => setFilterDialogOpen(false)}
            className="mr-1"
          >
            <span className="text-black dark:text-white dark:bg-gray-800">
              Cancel
            </span>
          </Button>
          <Button
            variant="text"
            color="green"
            onClick={handleConfirmsearch}
          >
            <span className="text-black dark:text-white dark:bg-gray-800">
              Apply
            </span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
