import React from 'react'
import { Link } from 'react-router-dom'
import { demoVideoTitle, demoChannelTitle, demoVideoUrl, demoChannelUrl } from "../utils/constants"
import { AiFillCheckCircle } from "react-icons/ai"
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='flex md:w-80 sm:w-full flex-col text-white'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className='mb-1 w-full h-full'>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className="h-full w-full object-contain" />
      </Link>
      <div className='px-2 -mt-10 md:-mt-9 flex flex-col'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className=" font-semibold break-all pt-1">
          {snippet?.title.slice(0, 61) || demoVideoTitle.slice(0, 61)}....
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className="text-gray-400 flex gap-1 items-center font-mono text-sm mb-2">
          <p>{snippet?.channelTitle || demoChannelTitle} </p> <span><AiFillCheckCircle /></span>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard