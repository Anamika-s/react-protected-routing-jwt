import logo from './logo.svg';
import './App.css'; 
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Home} from './components/Home'
import {Login} from './components/Login'
import {Logout} from './components/Logout'
import {Dashboard} from './components/Dashboard'
import {Product} from './components/Product';
import {AboutUs} from './components/AboutUs';
import {ContactUs} from './components/ContactUs';
import { NavrBar } from './components/NavrBar';
import { ProductDertails } from './ProductDertails';
import { Layout } from './components/Layout'
import { ProductLayout } from './ProductLayout';
import { Student } from './components/Student';
import { Protected } from './Protected';


function App() {
 let isLoggedin = false; 
 let data =
 {
   "msg" : "User is not logged in"
 }

  return (
    <div className="App">
      
      <>
 <BrowserRouter>
 {/* <NavrBar/> */}
 <Routes>
  <Route path='/' element={<Layout/>}>

  <Route index element={<Home/>}/> 
  <Route path="about" element={<AboutUs/>}/>
  <Route path="contact" element={<ContactUs/>}/>
  <Route path="dashboard" element={isLoggedin ? <Dashboard/> : <Navigate to="/login" state={data}/>}/>
  <Route path="login" element={<Login/>} state={data}/>
  
  <Route path="logout" element={<Logout/>}/>
  </Route>
  <Route path= "/products" element={<ProductLayout/>}>
    <Route path="productslist" element={<Protected component= {<Product/>}/>}/>
    <Route path="studentslist" element={ <Protected component= {<Student/>}/>}/>
  <Route path='productdetails/:id/:category' element={<ProductDertails/>}/>
   </Route>
  
  </Routes></BrowserRouter>

      </>
      </div>
  );
}

export default App; 
