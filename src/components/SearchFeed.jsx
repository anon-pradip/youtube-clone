import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items));
  }, [searchTerm]);

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row">
        <div className="px-2">
          <h1 className="text-3xl font-mono -mb-5">
            Search results for: {searchTerm} <span className="text-red-500">videos</span>
          </h1>
          <div>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;