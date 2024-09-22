import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const AddToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className='flex flex-col justify-between items-center hover:scale-110 transition-all duration-300
     ease-in gap-3 p-2 mt-10 ml-5 rounded-xl outline hover:shadow-xl '>
      <div>
        <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[12px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full'/>
      </div>
      <div className='flex justify-between items-center w-full mt-5 mb-3 px-3'>
        <div>
          <p className=' text-green-600  font-bold'>${post.price}</p>
        </div>
        {
          cart.some( (p) => p.id === post.id) ?
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
           texr-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button  className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          texr-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
          onClick={AddToCart}>
            Add to Cart
          </button>)
        }
      </div>
      
    </div>
  )
}

export default Product
