import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChaannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChaannelDetail(data?.items[0]))
  }, [id])

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])

  return (
    <div className='flex flex-col bg-black'>
      <div className=' bg-gradient-to-r  from-blue-800 via-indigo-800 to-pink-400 h-44 z-10'></div>
      <div className='-mt-32 mx-auto z-20'>
        <ChannelCard channelItem={channelDetail} />
      </div>
      <div>
        <Videos videos={videos} />
      </div>

    </div>
  )
}

export default ChannelDetail