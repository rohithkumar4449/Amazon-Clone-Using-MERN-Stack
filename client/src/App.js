import './App.css';
import Navbaar from './components/header/navbaar';
import Newnav from './components/newnavbaar/newnav';
import Maincomponent from './components/home/Maincomponent';
import Sign_in from './components/signup_sign/Sign_in';
import SIgnUp from './components/signup_sign/SignUp';
import Cart from './components/cart/cart';
import Buynow from './components/buynow/buynow';
import Footer from './components/footer/footer';
import {Routes,Route} from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },2000)
  },[])
  return (
   <>
   {
    data ? (
      <>
       <Navbaar />
   <Newnav />
   <Routes>
    <Route path='/' element={<Maincomponent />}/>
    <Route path='/login' element={<Sign_in />}/>
    <Route path='/register' element={<SIgnUp />}  />
    <Route path='/getproductsone/:id' element={<Cart />} />b
    <Route path='/buynow' element={<Buynow />} />
   </Routes>
   <Footer/>
      </>
    ):(
      <div className='circle'>
        <CircularProgress />
        <h2>Loading...</h2>
              </div>
    )
   }
  
   </>
  );
}

export default App;



