import React from 'react'
import { Banner, Continue, Popular, TopRated, Trending, Upcoming } from '../components'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Continue/>
         <TopRated/> 
         <Trending/>
          <Popular/> 
         <Upcoming/>
    </div>
  )
}

export default Home