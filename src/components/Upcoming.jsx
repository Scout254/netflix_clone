import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useStateValue } from '../StateProvider'
import { API_KEY } from '../tmdb'
import { useNavigate } from 'react-router-dom'

import { SwiperSlide,Swiper } from 'swiper/react'

const Upcoming = () => {
    const [{coming,details},dispatch] = useStateValue();
    const navigate = useNavigate();
    useEffect(()=>{
        const fecthData = async() =>{
            const response = await axios.get(`
            https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`)

          console.log(response.data);
            const {results} = response.data;

          const coming = await Promise.all(
            results.map(async({
              id,
              title,
              original_title,
              backdrop_path,
              poster_path,
              overview,
              release_date,
              vote_average,
            })=>{
              const VideoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                params:{
                  api_key:API_KEY,
                  append_to_response:"videos",
                }
              });
              console.log("videoinfor:",VideoResponse.data);

              return{
                id,
                title,
                original_title,
                backdrop_path,
                poster_path,
                overview,
                release_date,
                vote_average,
                video:VideoResponse.data.videos.results[0],
              }
            })
          )
           
            dispatch({
                type:"SET_UPCOMING",
                coming:coming,
            });
            console.log("coming data:",coming);
        }
        fecthData();    
    },[]);

    const handleViewDetails=({
      id,
      title,
      original_title,
      backdrop_path,
      poster_path,
      overview,
      release_date,
      vote_average,
      video
    })=>{
      navigate(`movie/${id}`);
      dispatch({
          type:"SET_DETAILS",
          details:{
            id,
            title,
            original_title,
            backdrop_path,
            poster_path,
            overview,
            release_date,
            vote_average,
            video
          }
        }
      )
    }
  return (
    <div className="bg-gray-100 px-6 py-12">
    <h1 className="text-2xl font-bold mb-8">Upcoming Movies</h1>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      // scrollbar={{ hide: true }}
      className="mySwiper"
    >
      {coming?.map(({ id, title, original_title, backdrop_path, poster_path, overview, vote_average, video, release_date }) => (
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

export default Upcoming