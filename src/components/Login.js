import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import { useLocation} from 'react-router-dom'
export const Login = () => {
  let location = useLocation();
  const [user, setUser] = useState(
    {
      email : "",
      password:""
    }
  )

  const handleChange = e =>
  {
 const {name , value } = e.target;
 setUser(
  {...user,
  [name]:value
 })
  }
  const handleSubmit = async (e) =>
  {
      e.preventDefault();
      const {email , password} = user;
      let config = {
        headers :
      {
        'Content-Type':'application/json'
      }
      };
      const resp = await axios.post("http://localhost:9000/api/login", user , config)
 console.log(resp)
 alert(resp.data.message)
 let token = resp.data.token;
 if(token!=null)
 localStorage.setItem("token", token)

// sessionStorage.setItem("token", token)
  }
  // console.log(location)
  return (
    <div>
      
      <h1> Login Page </h1>
      <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email"> email </label>
              <input type="email" name="email" value={user.email}  onChange={handleChange}/> 
              </div>
              <div>
                <label htmlFor="password"> password </label>
              <input type="password" name="password" value={user.password} onChange={handleChange} /> 
              </div>
              <button> Login </button>
              

      </form>
       </div>
  )
}
