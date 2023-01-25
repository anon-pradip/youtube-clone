import React from 'react'
import { categories } from "../utils/constants"

const Sidebar = ({ setSelectedCategory }) => {
  return (
    <div className='flex flex-row md:flex-col top-0 overflow-y-auto md:h-[88vh] sticky bottom-0 sm:overflow-x-auto gap-x-3 mt-2 mb-5 no-scrollbar'>
      {
        categories.map((category, index) => {
          return (
            <button key={index} className="flex group justify-center items-center sm:gap-x-4 md:gap-x-3 text-center shadow-blue-900 shadow-md w-max mx-auto divide-blue-800 px-3 md:mb-1 h-9 rounded-2xl bg-violet-500 hover:bg-gray-900 focus:outline-none focus:bg-red-900" onClick={() => setSelectedCategory(category.name)}>
              <span className='text-xl group-focus:text-white text-red-500'>{category.icon}</span>
              <span className='clear-both inline-block overflow-hidden whitespace-nowrap'>{category.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default Sidebar