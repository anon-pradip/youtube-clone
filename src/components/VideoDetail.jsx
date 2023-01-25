import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { AiFillCheckCircle } from "react-icons/ai"
import Videos from "./Videos"

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail?.snippet) {
    return <div className='mt-24 ml-28'>Loading...</div>
  }

  const { snippet: { title, channelTitle, channelId, }, statistics: { viewCount, likeCount } } = videoDetail
  return (
    <div className='flex bg-black sm:flex-col md:flex-row flex-wrap px-7 justify-start gap-7 min-h-[calc(100vh_-_49px)] '>
      <div className='flex flex-col max-w-[370px] md:max-w-[800px] lg:max-w-6xl'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls style={{ maxWidth: "100%" }} />
        <div className='flex justify-between text-white mt-4'>
          <div className='flex flex-col space-y-2'>
            <p className='max-w-md '>{title}</p>
            <Link to={`/channel/${channelId}`} className='text-gray-400 flex items-center gap-1 cursor-pointer'>{channelTitle} <span><AiFillCheckCircle /></span></Link>
          </div>
          <div className=' flex flex-col'>
            <p>{parseInt(viewCount).toLocaleString()} views</p>
            <p>{parseInt(likeCount).toLocaleString()} likes</p>
          </div>
        </div>
      </div>
      <div>
        <Videos videos={videos} direction="col" />
      </div>

    </div>
  )
}

export default VideoDetail