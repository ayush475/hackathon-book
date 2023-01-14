// import { useState } from "react";
// import Select from "react-select";
// import MultiRangeSlider from "../Filterbar/slider/multiRangeSlider";


// const categoryList = [
//     {value:"Electronics",label:"Electronics"},
//     {value:"Cameras",label:"Cameras"},
//     {value:"Laptops",label:"Laptops"},
//     {value:"Accessories",label:"Accessories"},
//     {value:"Headphones",label:"Headphones"},
//     {value:"Food",label:"Food"},
//     {value:"Books",label:"Books"},
//     {value:"Clothes/Shoes",label:"clothes/Shooes"},
//     {value:"Beauty/Health",label:"Beauty/Health"},
//     {value:"Sports",label:"Sports"},
//     {value:"Outdoor",label:"Outdoor"},
//     {value:"Home",label:"Home"},
//   ];

  
// const options=[
//     {value:"Electronics",label:"Electronics"},
//     {value:"All",label:"All"},
//     {value:"Computer",label:"Computer"},
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
//     {value:"Computer",label:"Computer"},
    
    
//   ]
//   const customStyles = {
//     container: provided => ({
//       ...provided,
//       width: "fit-content"
//     }),
//     menu: (base) => ({
//       ...base,
//       width: "max-content",
//       minWidth: "100%",
//  }),
//  control: (base, state) => ({
//   ...base,
//   border: state.isFocused ? 0 : 0,
//   // This line disable the blue border
//   boxShadow: state.isFocused ? 0 : 0,
//   '&:hover': {
//      border: state.isFocused ? 0 : 0
//   }
// })
//   };




// function CustomerService() {
//     const[category,setCategory]=useState("All");
//     const handleCategoryChange=(item)=>{
//         setCategory(item.value);
//         console.log(item.value);
//        }
//     return ( <div >
//         CustomerService
        
//         <Select 
//        className="my-react-select-container"
//        classNamePrefix="my-react-select"
//         styles={customStyles}
        
//         value={{label:category}}
//         onChange={handleCategoryChange}
//                 options={categoryList}components={{
//                   IndicatorSeparator: () => null
//                 }}

//                 />

// <div className="flex w-64 m-auto items-center h-32 justify-center">
//         <div className="py-1 relative min-w-full">
//           <div className="h-2 bg-gray-200 rounded-full">
//             <div className="absolute h-2 rounded-full bg-teal-600 w-0" style={{width: '24.1935%', left: '11.2903%'}} />
//             <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer" unselectable="on" onselectstart="return false;" style={{left: '11.2903%'}}>
//               <div className="relative -mt-2 w-1">
//                 <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full" style={{marginLeft: '-25px'}}>
//                   <div className="relative shadow-md">
//                     <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">$ 15</div>
//                     <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
//                       <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer" unselectable="on" onselectstart="return false;" style={{left: '35.4839%'}}>
//               <div className="relative -mt-2 w-1">
//                 <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full" style={{marginLeft: '-25px'}}>
//                   <div className="relative shadow-md">
//                     <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">$ 30</div>
//                     <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
//                       <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">$ 8</div>
//             <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">$ 70</div>
//           </div>
//         </div>
//       </div>

               
//     </div> );
// }

// export default CustomerService;