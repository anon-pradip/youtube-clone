import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <form className='flex flex-row justify-center items-center' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search' className='px-2 py-1 rounded-md border-none rounded-r-none bg-blue-gray-700 focus:outline-none text-white' onChange={(e) => setSearchTerm(e.target.value)} />
      <BiSearch className='text-white h-8 bg-blue-gray-700 rounded-md rounded-l-none border-l border-gray-600 px-1 text-3xl' />
    </form>
  )
}

export default Searchbar