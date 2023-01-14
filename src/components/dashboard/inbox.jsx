function Inbox() {
  return (
    <div className="dark:bg-gray-700 dark:text-white ">
      <div className="flex items-center justify-between dark:bg-gray-800 dark:text-white pt-2 pb-2 "></div>
      <div className="w-full p-3  border-t bg-white rounded flex dark:bg-gray-800 dark:text-white">
        <div className="pl-3 w-full">
          <p className="text-md font-semibold leading-none dark:text-white flex justify-between">
            <span className="flex flex-wrap">Jagadish Shrestha</span>
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
          </p>
          <p className="text-xs font-semibold leading-none dark:text-white">
            Shresthadev@gmail.com,9869194591
          </p>
          <p className="text-xs leading-none mt-1 text-gray-600 dark:text-white">
            I would like to know about whether the delivery of refrigenator will
            be done in Dolpa and if yes how much the transportation will cost.
          </p>

          <p className="text-xs leading-3 pt-1 text-gray-500 dark:text-white">
            2 hours ago
          </p>
        </div>
      </div>
    

      
      <div className="flex border-t  items-center justiyf-between dark:bg-gray-800">
        <hr className="w-full" />
        <p className="text-sm flex flex-shrink-0 leading-normal px-3 py-12 text-gray-500 dark:bg-gray-800 dark:text-white">
          Thats it No more Queries:)
        </p>
        <hr className="w-full" />
      </div>
    </div>
  );
}

export default Inbox;
