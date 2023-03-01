import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import { API_KEY } from '../tmdb'
import { useNavigate } from 'react-router-dom'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';



const Continue = () => {
    const [{continuewatching,details},dispatch] = useStateValue();

    const navigate = useNavigate();

    
    useEffect(()=>{
        const fecthData = async() =>{
            const response = await axios.get(`
            https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`)


          console.log(response.data);
            const {results} = response.data;
            //fetch video information of every movie and append it into the movie object

            const continuewatching = await Promise.all(
              results.map(async({
                id,
                backdrop_path,
                poster_path,
                original_title,
                title,
                release_date,
                vote_average,
              })=>{
                const VideoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                  params:{
                    api_key:API_KEY,
                    append_to_response:"videos"
                  }
                });

                console.log("videoinfo:",VideoResponse.data);

                return{
                  id,
                  backdrop_path,
                  poster_path,
                  original_title,
                  title,
                  release_date,
                  vote_average,
                  video:VideoResponse.data.videos.results[0]
                }
              })
            );
        
            dispatch({
                type:"SET_CONTINUE_WATCHING",
                continuewatching:continuewatching,
            });
            console.log("continue watching data:",continuewatching);
        }
        fecthData();    
    },[])

    const handleViewDetails = ({
      id,
      title,
      video,
      poster_path,
      backdrop_path,
      release_date,
       overview,
      vote_average,
      original_title,

    }) => {
      navigate(`movie/${id}`);

      dispatch({
        type: 'SET_DETAILS',
        details: {
          id,
          title,
          backdrop_path,
          poster_path,
          video,
          release_date,
          overview,
          original_title,
          vote_average,
        },
      });
    };
  return (
    <div className="bg-gray-100 px-6 py-12">
    <h1 className="text-2xl font-bold mb-8">Continue Watching</h1>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      // scrollbar={{ hide: true }}
      className="mySwiper"
    >
      {continuewatching?.map(({ id, title, original_title, backdrop_path, poster_path, overview, vote_average, video, release_date }) => (
        <SwiperSlide key={id} className="group relative rounded-md overflow-hidden"  onClick={() => handleViewDetails({ id, title, original_title, overview, backdrop_path, poster_path, video, vote_average, release_date })}>
          <img
            className="w-full h-72 object-cover transition duration-500 transform group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  
  

  )
}

export default Continue