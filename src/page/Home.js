import React, { useState, useEffect } from 'react';
import EmployeeList from "../component/EmployeeList";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getProfile } from '../function/AuthApi'
import { getRefreshToken } from "../function/AuthApi";

function Home() {

  useEffect(() => {
    // getRefreshToken(600000)
    setInterval(() => {
      console.log('useEffect: Home.js');
    }, 60000);
      // console.log('helloworld');
  }, []);

  const navigate = useNavigate();

  const getLogout = () => {
    const token = localStorage.getItem('TOKEN');
    axios({
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'https://api.porapipat.me/auth/logout',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : {
        refreshToken: token
      }
    }).then((response) => {
      console.log(JSON.stringify(response.data));
      localStorage.clear();
      navigate("/",{ replace: true });
      // window.location('/login');
      // alert(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <div className='flex flex-col h-screen pt-20'>
      <div className="border-l-8 border-orange-600 pl-1.5 mb-9 ml-40">
        <h1 className="font-roboto font-semibold text-4xl">ค้นหาแพทย์</h1>
        <button onClick={getProfile}>PROFILE</button>
        <button onClick={getLogout}>Logout</button>
      </div>
      <EmployeeList/>
    </div>
  );
}

export default Home;
