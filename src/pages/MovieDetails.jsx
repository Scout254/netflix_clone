import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { API_KEY } from '../tmdb';
import { Swiper,SwiperSlide } from 'swiper/react';
const MovieDetails = () => {
  const [{ details, similar }, dispatch] = useStateValue();
  const id = details[0]?.id;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
      );

      console.log('similar movies:', response.data);
      const { results } = response.data;

      const similar = results.map(
        ({
          id,
          title,
          original_title,
          backdrop_path,
          poster_path,
          overview,
          release_date,
          vote_average,
        }) => {
          return {
            id,
            title,
            original_title,
            backdrop_path,
            poster_path,
            overview,
            release_date,
            vote_average,
          };
        }
      );

      dispatch({
        type: 'SET_SIMILAR',
        similar: similar,
      });
      console.log("similar data:",similar);
    };

    if (id) {
      fetchData();
    }
  }, [dispatch, id]);

  const handlePlayTrailer = () => {
    setIsPlaying(true);
  };

  return (
   <div className="p-5 ">
  <div className="">
    {details?.map((item) => (
      <div key={item.id} className="flex space-x-2">
        <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${item.video.key}`}
          playing={isPlaying}
          width="600px"
          height="400px"
          origin="http://localhost:5173"
          className=""
        />
        </div>
        <div className=''>
        {/* <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt=""
          className=""
        /> */}
        <div className="flex flex-col gap-8 px-12 pt-5 shadow-gray-500">
          <h1 className="">{item.title || item.original_title}</h1>
          <div className='flex items-center gap-4'>
          <div className='border border-black w-[20px] flex justify-center items-center'>R</div>
          <h2>{item.release_date}</h2>
         <h2 className='flex items-center gap-3'><div className='bg-black h-[10px] w-[10px] rounded-full'></div>Thriller,Horror,Mystery <div className='bg-black h-[10px] w-[10px] rounded-full'></div> 1hr 40mins</h2>
          </div>
       
          <div className='flex justify-between items-center'>
          <button className='bg-gray-800 p-4 rounded-full text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          </button >
          <button  className='bg-gray-800 p-4 rounded-full text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          </button >
          <button  className='bg-gray-800 p-4 rounded-full text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          </button>
          <button  className='bg-gray-800 p-4 rounded-full text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          </button>


          <button
            className="flex items-center h-[60px] w-[180px] bg-red-600 text-white gap-[10px] justify-center rounded-full"
            onClick={handlePlayTrailer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            

            Play Trailer
          </button>

          </div>
          
          <h1>Overview</h1>
          <p className="">{item.overview}</p>
        </div>
        </div>
       
      </div>
    ))}
  </div>
  <div className="bg-gray-100 px-4 py-8">
  <h1 className="text-2xl font-bold mb-8">Similar Movies</h1>
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    className=""
  >
    {similar?.map(
      ({
        id,
        title,
        original_title,
        overview,
        backdrop_path,
        poster_path,
        vote_average,
        release_date,
      }) => (
        <SwiperSlide key={id} className="group relative rounded-md overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt=""
            className="w-full h-72 object-cover transition duration-500 transform group-hover:scale-105"
          />
          <div className="p-4">
            <h1 className="text-lg font-bold mb-2 movie-title">{title}</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 view-details-button"
              onClick={() =>
                handleViewDetails({
                  id,
                  title,
                  original_title,
                  overview,
                  backdrop_path,
                  poster_path,
                  vote_average,
                  release_date,
                })
              }
            >
              View Details
            </button>
          </div>
        </SwiperSlide>
      )
    )}
  </Swiper>
</div>
</div>

  );
};

export default MovieDetails;
