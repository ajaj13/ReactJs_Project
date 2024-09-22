import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const Cartitem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className='mx-5 my-2 p-5 border-b-2 border-b-slate-400'>
      <div className='flex flex-col sm:flex-row mx-auto p-3 justify-between gap-4'>
        <div className='h-[210px] sm:w-[30%] '>
          <img src={item.image} className='w-full h-full'/>
        </div>
        <div className='w-[100%] md:w-[70%] md:ml-10 flex flex-col'>
          <h1 className='text-slate-700 font-bold text-xl'>{item.title}</h1>
          <h1 className='text-slate-700 text-md font-medium mt-5'>{item.description}</h1>
          <div className='flex justify-between p-2 mt-5'>
            <p className=' text-green-600 text-[18px] font-bold'>${item.price}</p>
            <div onClick={removeFromCart} className=" bg-red-200 group hover:bg-red-400 
            transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
              <FaDeleteLeft className='text-red-800 group-hover:text-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
