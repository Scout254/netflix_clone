import React from 'react'
import { useStateValue } from '../StateProvider'
import { auth } from '../../firebase';

const ProfileScreen = () => {
    const [{user}] = useStateValue();
  return (
    <div className='flex  flex-col'>
        <h2 className='text-center text-4xl font-bold py-5'>Edit Profile</h2>
        <div className='flex justify-center  gap-[10px]'>
        <div>
       <img src="https://th.bing.com/th/id/OIP.JIPMtrXt6ynG_NAOmtGmswHaHX?w=131&h=149&c=7&r=0&o=5&pid=1.7" alt=""
       className='h-[60px] w-[60px]' 
       />
       </div>

      <div>
      <h1>{user.email}</h1>


            <button onClick={() => auth.signOut()} className='bg-gray-600 w-[120px] h-[40px]'>
                
                sign out
            </button>
      </div>
        </div>
       
    </div>
  )
}

export default ProfileScreen