import React, {useState, useEffect} from 'react'
import axios from 'axios'
export const Student = () => {
  console.log("Inside Con")
  const [students, setStudents] = useState(null);
   let token = localStorage.getItem("token")
   console.log("Inside Stu " + token)
  useEffect(()=>
  {
    axios.get("http://localhost:9000/student" ,
    {
      headers :{
      "Authorization" : `Bearer ${token}`}}).then((resp)=>
    {

      console.log("Res: " + resp.data)
      setStudents(resp.data)

    })
  })
  if(!students)  return null
  return (
    <div> Student List  
      {students}
    </div>
  )
} 
 