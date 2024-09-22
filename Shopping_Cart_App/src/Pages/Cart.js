import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, SetTotalAmount] = useState(0);

  useEffect( () =>{
    SetTotalAmount( cart.reduce( (acc,curr) => acc+curr.price,0));
  }, [cart]);

  return (
    <div className='max-w-6xl p-2 mx-auto min-h-[80vh]'>
      {
        cart.length > 0 ?
        (<div className='flex flex-col md:flex-row justify-between'>
          <div className='md:w-[60%] mx-auto'>
            {
              cart.map( (item,index) => {
                return <Cartitem key={cart.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
            <div className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>
              <div className=' flex flex-col  '>
                <h2 className='font-semibold text-xl text-green-800 '>your items</h2>
                <h1 className='font-bold text-5xl text-green-700 '>Summary</h1>
                <p className='text-2xl mt-5 font-semibold'>Total items : 
                  <span className='text-gray-700 font-semibold text-xl'> {cart.length}</span></p>
              </div>
              <div className='flex flex-col'>
                <p className='text-xl font-bold text-gray-700'>Total AMount : ${totalAmount}</p>
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300
                 ease-linear mt-5 border-2
                 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>):
        (<div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-gray-700 text-xl mt-20'>Your Cart is empty</h1>
          <NavLink to={"/"} >
            <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300
                 ease-linear mt-5 border-2
                 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
              Shop Now
            </button>
          </NavLink>
        </div>)
      }
    </div>
  )
}

export default Cart;
