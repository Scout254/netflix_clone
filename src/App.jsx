import React, { useEffect } from 'react'
import { Home, MovieDetails, Movies, MyList, News, Tv } from './pages'
import { Landing, Login, Navbar, ProfileScreen } from './components'
import { Route, Routes } from 'react-router-dom'
import { auth } from '../firebase'
import { useStateValue } from './StateProvider'


const App = () => {
  const [{user},dispatch] = useStateValue();
  
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        console.log(userAuth);
        dispatch({
          type:"SET_LOGIN",
          user:{
            uid:userAuth.uid,
            email:userAuth.email,
          }
        });
        console.log(user);
      }else{
        dispatch({
          type:"SET_LOGOUT",
          user
        })
      }
    });
    return unsubscribe;
  },[])
  return (
    <div>
      {!user ? (
        <Login/>
      ):(
        <div>
           <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/movie/:id' element={  <MovieDetails/>}/>
        <Route path='/movies' element={  <Movies/>}/>
        <Route path='/tv' element={ <Tv/>}/>
        <Route path='/mylist' element={ <MyList/>}/>
        <Route path='/news' element={ <News/>}/>
        <Route path='/profile' element={ <ProfileScreen/>}/>
       

      </Routes>
        </div>
      )}
     
 
     

     
     
     
     
      
      

    </div>
  )
}

export default App