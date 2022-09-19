import   {NavLink , Outlet } from "react-router-dom"

export const Layout = () =>
{
  return(
    <>
    <ul>
   <li><NavLink to="/" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : 'green'}}}> Home Page </NavLink></li>
      {/* <li> <NavLink to="/about" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> About Us </NavLink></li>
      <li> <NavLink to="/contact" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Contact Us </NavLink></li> */}
        <li> <NavLink to="/dashboard" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Dashboard </NavLink></li>
          <li> <NavLink to="/products" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Products </NavLink></li>  
        {/* <li> <NavLink to="/products" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> List of Products </NavLink></li> */}

       <li> <NavLink to="/login" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}>  Login  </NavLink></li>
      {/* <li> <NavLink to="/logout" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}>  Logout  </NavLink></li> */}
     </ul>
    <Outlet/>     
     </>
  )
}