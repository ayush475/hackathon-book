import { Link } from "react-router-dom";


function UsersTable() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {/* table component */}
      <div className="container mx-auto px-4 sm:px-8 dark:bg-gray-700 dark:border-gray-700">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight dark:text-white">
              Users
            </h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col ">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
              <div className="relative">
                <select className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-  dark:bg-gray-800 dark:border-gray-700  dark:text-white">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            <div className="block relative">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                placeholder="Search"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none  dark:bg-gray-800 dark:border-gray-700  dark:text-white"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-100 dark:text-white ">
                      User
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Rol
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Vera Carpenter
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            vera@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Admin
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/User/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Vera Carpenter
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            vera@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Admin
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/User/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Vera Carpenter
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            vera@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Admin
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/User/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Vera Carpenter
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            vera@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Admin
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/User/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Vera Carpenter
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            vera@gmail.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Admin
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/User/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>

                 
                 
                  {/* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className= " font-medium text-gray-900 whitespace-no-wrap">
                          Vera Carpenter
                        </p>
                        <p className="text-gray-700 whitespace-no-wrap">
                          vera@gmail.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 21, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Blake Bowman
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 01, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Dana Moore
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 10, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" />
                      <span className="relative">Suspended</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Alonzo Cox
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                      <span className="relative">Inactive</span>
                    </span>
                  </td>
                </tr> */}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between  dark:bg-gray-800 dark:border-gray-700      ">
                <span className="text-xs xs:text-sm text-gray-900 dark:text-white">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l dark">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
