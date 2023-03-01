import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../tmdb";
import ReactPlayer from "react-player";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`
      );

      const randomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];
      const videoResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomMovie.id}`,
        {
          params: {
            api_key: API_KEY,
            append_to_response: "videos",
          },
        }
      );
      console.log("videoinfor:", videoResponse.data);

      setBannerMovie({
        ...randomMovie,
        video: videoResponse.data.videos.results[0],
      });
      return response;
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const closePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <div className="relative ">
    {showPlayer && (
      <div className="absolute top-0 left-0 w-full h-full z-20">
        {bannerMovie.video && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${bannerMovie.video.key}`}
            width="100%"
            height="100%"
            controls
            onEnded={() => setShowPlayer(false)}
            
          />
        )}
        <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-white" onClick={closePlayer}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    )}
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`}
        alt=""
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
    <div className="absolute bottom-0 left-0 pb-8 pl-8 pr-64">
      <h1 className="text-6xl font-bold text-white">
        {bannerMovie.title || bannerMovie.original_title}
      </h1>
      <p className="text-white mt-4 mb-8">
        {truncate(bannerMovie.overview, 150)}
      </p>
      <button
        className="bg-red-600 text-white h-12 px-6 mr-4 rounded-lg"
        onClick={() => setShowPlayer(true)}
      >
        Play Trailer
      </button>
      <button className="bg-red-600 text-white h-12 px-6 rounded-lg">
        My List
        </button>
      </div>
    </div>
  );
};

export default Banner;
