import axios from 'axios';

const login = async (username, password, navigate) => {
    
    const url = "https://api.porapipat.me/auth/login";
    await axios({
      method: "POST",
      url: url,
      data: {
        username: username,
        password: password
      },
    })
      .then((response) => {
        console.log(response.data.accessToken);
        localStorage.setItem("TOKEN", response.data.accessToken);
        navigate("/home");
        // window.location.replace('/home');
      })
      .catch((err) => {
          console.log('34');
          console.log(err);
        alert('Failed')
      });
  }

  const register = async (username, password, role, navigate) => {
    const qs = require("qs");
    let data = qs.stringify({
      Employee_ID: "1",
      Myuser_Username: username,
      Myuser_Password: password,
      Myuser_Role: role,
    });

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://api.porapipat.me/auth/register",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProfile = () => {
    // alert('hello')
    const token = localStorage.getItem('TOKEN')
    // alert(token);
    axios({
      method: 'GET',
      maxBodyLength: Infinity,
      url: 'https://api.porapipat.me/auth/protected',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data);
      alert(JSON.stringify(response.data) + `\nTOKEN: ${token}`)
      // alert('TOKEN: '+token)
    }).catch((error) => {
      console.log(error);
      alert('can not access becase token is expired')
    })
    console.log('1');
  }

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
    //   navigate("/",{ replace: true });
      // window.location('/login');
      // alert(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  const getRefreshToken = (time) => {
    setInterval(() => {
        const token = localStorage.getItem('TOKEN');
        console.log(`${token}`);
        axios({
          method: "POST",
          maxBodyLength: Infinity,
          url: "https://api.porapipat.me/auth/refresh-token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: {
            refreshToken: `${token}`,
          },
        })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("TOKEN", response.data.accessToken);
          })
          .catch((error) => {
            localStorage.clear()
            alert('cannot refresh token : you must Re Login Again');
            window.location.replace('/');
            console.log(error);
          });
      }, time);
  }

export { login, register, getProfile, getLogout, getRefreshToken };