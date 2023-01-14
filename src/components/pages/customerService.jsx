import React from "react";
export default function CustomerService() {
  return (
    <>
      <div className="py-2 lg:py-8  relative">
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-2 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
             
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl font-bold tracking-wider text-gray-800 dark:text-white">
                    We’re Here
                  </h1>
                  <div className="w-full md:w-10/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider  dark:text-white">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold  dark:text-indigo-600">
                        Address
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2  dark:text-white">
                        Office #13, NSTP, NUST University H-12 Sector, Islamabad
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold  dark:text-indigo-600">
                        Contact
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2  dark:text-white">
                        +92 051 4567890 (Phone)
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-  dark:text-white">
                        +92 123 4567890 (Cell)
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold  dark:text-indigo-600">
                        Email
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2  dark:text-white">
                        alphasquad@example.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:pl-24">
              <form
                id="contact"
                className="bg-white py-4 px-8 rounded-tr rounded-br dark:bg-gray-700"
              >
                <h1 className="text-4xl text-gray-800 font-bold mb-6 dark:text-white">
                  Enter Details
                </h1>
                <div className="block xl:flex w-full flex-wrap justify-between mb-6 flex-col">
                  <div className="w-full max-w-sm mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="full_name"
                        name="full_name"
                        type="text"
                        className="  dark:bg-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                  <div className="w-full max-w-sm mb-6 xl:mb-0 mt-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        type="email"
                        className="dark:bg-gray-600 dark:text-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                       
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        placeholder="9812345980"
                        type="tel"
                        className=" dark:bg-gray-600 dark:text-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="text-sm dark:text-white font-semibold text-gray-800 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder
                      name="message"
                      className="border-gray-300 dark:bg-gray-600 dark:text-white border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
