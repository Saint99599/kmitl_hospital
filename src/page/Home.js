import EmployeeList from "../component/EmployeeList";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getProfile } from '../function/AuthApi' 

function Home() {

  const navigate = useNavigate();

  const getLogout = () => {
    const token = localStorage.getItem('TOKEN');
    axios({
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/auth/logout',
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
    <div>
      <button onClick={getProfile}>PROFILE</button>
      <br></br>
      <button onClick={getLogout}>Logout</button>
      <EmployeeList/>
    </div>
  );
}

export default Home;
