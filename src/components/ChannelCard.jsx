import React from 'react'
import { demoProfilePicture } from '../utils/constants'
import { AiFillCheckCircle } from "react-icons/ai"
import { Link } from 'react-router-dom'


const ChannelCard = ({ channelItem }) => {
  return (
    <Link to={`/channel/${channelItem?.id?.channelId}`} className='flex flex-col h-80 w-80 justify-center text-white items-center'>
      <img src={channelItem?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelItem?.snippet?.title} className=" rounded-full h-44 w-44" />
      <p className='mt-2 flex space-x-1 items-center'><span>{channelItem?.snippet?.title} </span> <span>
        <AiFillCheckCircle className='text-gray-300 text-sm' />
      </span></p>
      {channelItem?.statistics?.subscriberCount && <p>{parseInt(channelItem?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>}
    </Link>
  )
}

export default ChannelCard