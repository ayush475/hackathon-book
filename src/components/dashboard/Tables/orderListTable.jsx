import productDemoImage from '../../../demoImages/productDemoImage1.jpg';

function OrderListTable() {
    return (   <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6  text-lg dark:text-white">
            
            <span></span>
          </th>
          <th scope="col" className="py-3 px-6">
            Product
          </th>
          <th scope="col" className="py-3 px-6">
            Qty
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
          <th scope="col" className="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      
        <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50">
          <td className="p-4 pl-1 w-32">
            <div className="flex gap-1 items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <img src={productDemoImage} alt="Apple Watch" />
            </div>
          
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            Apple Watch
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
             
             10
            </div>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            $599
          </td>
          <td className="py-4 px-6">
            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
          </td>
        </tr> 
        <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50">
          <td className="p-4 pl-1 w-32">
            <div className="flex gap-1 items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <img src={productDemoImage} alt="Apple Watch" />
            </div>
          
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            Apple Watch
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
             
             10
            </div>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            $599
          </td>
          <td className="py-4 px-6">
            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
          </td>
        </tr> 
        <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50">
          <td className="p-4 pl-1 w-32">
            <div className="flex gap-1 items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <img src={productDemoImage} alt="Apple Watch" />
            </div>
          
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            Apple Watch
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
             
             10
            </div>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            $599
          </td>
          <td className="py-4 px-6">
            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
          </td>
        </tr> 
       
       
      </tbody>
    </table>
  </div> );
}

export default OrderListTable;