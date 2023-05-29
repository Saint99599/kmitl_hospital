import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from '../function/AuthApi';

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const dump_myfetch = async () => {
    const url = "http://localhost:3000/auth/login";
    // console.log('Username: '+username);
    // alert(username)
    await axios({
      method: "post",
      url: url,
      data: {
        username: username,
        password: password
      },
    })
      .then((response) => {
        console.log('12');
        // console.log(response);
        console.log(response.data.accessToken);
        localStorage.setItem("TOKEN", response.data.accessToken);
        navigate("/home");
        // return response.data.accessToken;
        // return res.send(response.data);
        return 'hello';
      })
      .catch((err) => {
          console.log('34');
          console.log(err);
        // return res.status(err.response.status).send(err.response.data);
        alert('Failed')
      });
    // console.log('hello');
    // alert('hello')
    // return 'TEST'
  }

//   const ter = () => {
//     const fetchData = async () => {
//         try {
//             const result = await axios.get('http://database.porapipat.me/api/myuser/dew');
//             setData({ users: result.data });
//             console.log("TOKEN: "+result);
//         } catch (error) {
//             console.error(error);
//         }
//         };

//     fetchData();
    
//     // alert(data.users);
//     console.log(data.users);
//   }
  
  const handleLogin = (e) => {
    console.log('9');
    const x = login(username, password, navigate);
    console.log("PRE: "+x);
    alert("TOKEN: "+x)
    console.log('10');

    // const url = "http://localhost:3000/auth/login";
    
    // const response = await fetch(url, {
    //     method: "POST",
    //     body: {
    //         username: username,
    //         password: password
    //     }
    // })

    // console.log('RES: '+response);

    e.preventDefault();

    // if (username === "dew" && password === "1234") {
    //     console.log("hellowolrd");
    //     navigate("/home");

    // } else {
    //     alert("Login fail");
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
        <div className="w-1/3 h-2/3 bg-white shadow-2xl rounded-lg flex justify-center items-center ">
            <div className="w-2/3 h-2/3 p-4 ">
                <h2 className="text-3xl my-2.5">ยินดีต้อนรับ</h2>
                <h1 className="text-5xl leading-6 my-2.5 pb-4">เข้าสู่ระบบ</h1>
                
                <form onSubmit={handleLogin}>
                    <div className="my-5">
                        <p className="font-roboto font-normal font-400 text-base leading-5 text-gray-700 pb-2">Username</p>
                        <input 
                            className="w-full bg-white shadow-lg rounded-lg outline-none border border-gray-300 p-2"
                            type="text"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                            // required
                        />
                    </div>
                    <div className="my-5">
                        <p className="font-roboto font-normal font-400 text-base leading-5 text-gray-700 pb-2">Password</p>
                        <input
                            className="w-full bg-white shadow-lg rounded-lg outline-none border border-gray-300 p-2"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </div>
                    <button className="bg-orange-500 rounded-lg font-roboto font-bold font-700 text-lg leading-6 text-white w-full h-12" type="submit">เข้าสู่ระบบ</button>
                </form>
            <a href="/register">คุณยังไม่มีบัญชีใช่หรือไม่? [click]</a>
            </div>
        </div>
    </div>
  );
};

export default Login;
