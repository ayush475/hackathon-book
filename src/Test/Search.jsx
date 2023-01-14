import React from 'react'
import Snav from './Snav'

const Search = () => {
  return (
    <div className="relative flex h-[10vh] flex-col justify-center overflow-hidden bg-black p-6 sm:py-12 md:h-2">
  <div class="relative rounded-2xl bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
    <div class="mx-auto max-w-md">


      <form action="" class="relative mx-auto w-auto">
        <input type="search"  placeholder='search products'
              class="peer  mb-0 cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
   


    </div>
  </div>
</div>

  )
}

export default Search