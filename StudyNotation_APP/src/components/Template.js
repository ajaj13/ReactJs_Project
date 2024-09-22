import React from 'react';
import frame from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc';

const Template = ({title,desc1,desc2,image,SetLogedin,formtype,}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-12 gap-x-12 mx-auto'>
      
        <div className="w-11/12 max-w-[450px] mx-0 text-white">
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.675rem] mt-4'>
                <span className='text-richblack-100 '>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
                (<SignupForm SetLogedin={SetLogedin} />):
                (<LoginForm SetLogedin={SetLogedin} />)
            }

            <div className='flex w-full  items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>

            <button className='flex w-full justify-center items-center rounded-[8px] border
            border-richblack-700 text-richblack-100 font-medium px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='w-11/12 max-w-[450px] relative'>
            <img src={frame} alt='pattern' width={558} height={504}
            loading='lazy' />
            <img src={image} alt='students' width={558} height={490}
            loading='lazy' className=' absolute -top-4 right-4'/>
        </div>

    </div>
  )
}

export default Template
