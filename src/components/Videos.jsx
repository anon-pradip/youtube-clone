import React from 'react'
import { ChannelCard, VideoCard } from "./"

const Videos = ({ videos, direction }) => {
  if (!videos?.length) {
    return (
      <div className='mt-24 ml-28'>Loading...</div>
    )
  }
  return (
    <div className={`flex flex-${direction || 'row'} md:space-x-3 flex-wrap mt-4 justify-center items-center mx-auto`}>
      {videos.map((item, id) => (
        <div key={id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelItem={item} />}
        </div>
      ))}
    </div>
  )
}

export default Videos