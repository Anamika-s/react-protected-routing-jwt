import   {NavLink , Outlet } from "react-router-dom"

export const ProductLayout = () =>
{
  return(
      <>
      <ul>
        <li> <NavLink to="/products/productslist" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> List of Products </NavLink></li>

<li> <NavLink to="/products/productdetails/1/mobile" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Product Details </NavLink></li>
</ul>

<Outlet/>

      </>

  )

}