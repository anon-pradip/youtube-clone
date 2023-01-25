import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";

const App = () => (
  <div className="bg-black min-h-screen">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
