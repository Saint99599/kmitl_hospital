import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "qwerty" && password === "qwerty") {
        navigate("/home");
    } else {
        alert("Login fail");
    }
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
                            required
                        />
                    </div>
                    <div className="my-5">
                        <p className="font-roboto font-normal font-400 text-base leading-5 text-gray-700 pb-2">Password</p>
                        <input
                            className="w-full bg-white shadow-lg rounded-lg outline-none border border-gray-300 p-2"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="bg-orange-500 rounded-lg font-roboto font-bold font-700 text-lg leading-6 text-white w-full h-12" type="submit">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
