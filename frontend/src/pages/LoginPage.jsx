import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);

      navigate('/');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className="flex items-center w-screen h-screen bg-white">
  <div className='flex flex-col md:flex-row justify-end w-full px-4 md:px-20'>
    {/* Left section with text and image */}
    <div className="flex justify-center text-center md:text-left">
      <div className='text-black text-lg'>
        <div className='font-bold text-3xl md:text-4xl'>Sign Into Our Platform</div>
        <div className='text-3xl md:text-4xl mt-4 md:mt-6'>Our Platform</div>
      </div>
      {/* Image is hidden on small screens and visible on medium screens and larger */}
      <img src='/assets/Saly-14.png' className='hidden md:block mt-8 w-64 h-64 md:w-88 md:h-[26rem] mx-auto md:mr-20' />
    </div>

    {/* Right section with form */}
    <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-2/5">
      <form onSubmit={handleSubmit} className="w-full md:w-[26rem]">
        <h2 className="hidden md:block text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">Sign in</h2>
        <div className="mb-4">
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(event) => setEmail(event.target.value)}
            className="bg-[#F0EFFF] text-[#A7A3FF] focus:outline-none rounded-[6px] p-4 w-full placeholder-[#A7A3FF]" 
            required
          />
        </div>
        <div className="mt-6">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            className="bg-[#F0EFFF] text-[#A7A3FF] focus:outline-none rounded-[6px] p-4 w-full placeholder-[#A7A3FF]"
            required
          />
        </div>
        <button type="submit" className="bg-[#95A4FC] w-full text-white font-bold py-3 px-4 rounded hover:bg-[#697EFF] mt-12">Login</button>
      </form>
    </div>
  </div>
</div>


)}
export default LoginPage;
