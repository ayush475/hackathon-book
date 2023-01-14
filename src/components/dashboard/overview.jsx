import BarChart from "./charts/barChart";
import LineChart from "./charts/lineChart";
import PieChart from "./charts/pieChart";
import RadarChart from "./charts/radarChart";

function OverView() {
  return (
    <div className="container bg-yellow">
      {/* top OverView */}
      <div className="grid gap-3 p-2 grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revenue
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            2000
          </p>
        </div>
       
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Users
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            2500
          </p>
        </div>
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Orders
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            2100
          </p>
        </div>
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Sales
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            20066
          </p>
        </div>
      </div>

      {/* overview board including graph */}


<div className=" flex pr-2 pl-2  flex-col lg:flex-row ">
        <div className=" p-6 flex-1   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sales
            </h5>
          </a>
         <BarChart/>
        </div>

        <div className="p-6 max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl justify-center font-bold tracking-tight text-gray-900 dark:text-white">
              Stock
            </h5>
          </a>
         

<PieChart/>

        </div>
      </div>

      {/* line chart */}
      <div className=" flex pr-2 pl-2  flex-col lg:flex-row ">
        <div className=" p-6 flex-1   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Traffic
            </h5>
          </a>
         <LineChart/>
        </div>

        <div className="p-6 max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl justify-center font-bold tracking-tight text-gray-900 dark:text-white">
              Product 
            </h5>
          </a>
         

<RadarChart/>

        </div>
      </div>
    </div>
  );
}

export default OverView;
