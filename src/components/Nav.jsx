import {
  Typography
} from "@material-tailwind/react";
import Searchbar from "./Searchbar"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="py-2 nav px-4 lg:px-8 lg:py-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/" className="text-white bg-red-500 p-2 rounded-md">Youtube</Link>
        </Typography>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}