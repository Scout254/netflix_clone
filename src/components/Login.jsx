import React, { useRef, useState } from 'react'
import { auth } from '../../firebase';






const Login = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [passwordError , setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  
  const register = (e)=>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser)=>{
        console.log(authUser);
      })
      .catch((error)=>{
        if (error.code === "auth/email-already-in-use") {
          setEmailError("User already exists");
        } else if (error.code === "auth/weak-password") {
          setPasswordError("Password should be 6 or more characters");
        } else {
          setEmailError("Invalid email or password");
        }
      });

  };

  const signIn =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      if (error.code === "auth/wrong-password" || error.code === "auth/invalid-email") {
        setPasswordError("Invalid email or password.");
      } else {
        setPasswordError(error.message);
      }
    });


  }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='relative inset-0 bg-cover bg-center h-full w-full'
        style={{
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/7ae82418-beea-4868-8594-dddd284dc46c/IN-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
        }}>
        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
        </div>
        <div className="h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 p-8">
          <form className="w-[350px] h-[450px] p-5 bg-black">
            <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
            <div className="mb-4">
              <input ref={emailRef} className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300 " type="text" placeholder="Email or phone number" />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-4">
              <input ref={passwordRef} className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300" type="password" placeholder="Password" />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            <div className="mb-6 flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-white font-semibold">Remember me</label>
              <a href="#" className="ml-auto text-sm text-gray-400 hover:text-gray-200">Need help?</a>
            </div>
            <button onClick={signIn} className="w-full px-4 py-3 bg-red-600 rounded-lg text-white font-bold hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300">
              Sign In
            </button>
            <div className="mt-8 ">
              <p className="text-white">New to Netflix?
              <button onClick={register} className='pl-2 capitalize hover:text-red-400'>sign up</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
