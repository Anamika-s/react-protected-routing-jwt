import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
export const ProductDertails = () => {
 let {id, category} = useParams();
 let [searchParams, setsearchParams] = useSearchParams();
 console.log(searchParams.get("search")) 
 console.log(searchParams.get("sort")) 
 return (
    <div>ProductDertails of Product with ID : {id} 
    
    <h1> {category} </h1> 
    
    {searchParams} 
    
    
    </div>
  )
}
