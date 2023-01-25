import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items));
  }, [selectedCategory]);

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row">
        <div className="border-r-2 border-gray-800 px-1">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="px-2">
          <h1 className="text-3xl font-mono -mb-5">
            {selectedCategory} <span className="text-red-500">videos</span>
          </h1>
          <div>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
