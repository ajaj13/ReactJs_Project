import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state) => state)
  return (
    <div>
      <div className='flex justify-between max-w-6xl h-20 items-center mx-auto'>
        <NavLink to={"/"}>
            <div className='ml-6'><img src='../logo.png' className='h-14'/></div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to={"/"}> <p>Home</p> </NavLink>
            <NavLink to={"/cart"} >
                <div className='relative'><FaShoppingCart />
                {
                  cart.length > 0 && <span className=' absolute -top-3 -right-2 bg-green-600
                   text-sx w-5 h-5 flex justify-center items-center rounded-full animate-bounce'>{cart.length}</span>
                }
                </div>
                
            </NavLink>          
        </div>
      </div>
    </div>
  )
}

export default Navbar
