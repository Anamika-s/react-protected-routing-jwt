import React from 'react'
import { useLocation } from 'react-router-dom'
export const Login = () => {
  let location = useLocation();
  // console.log(location)
  return (
    <div>Login  { location.state.msg   } </div>
  )
}
