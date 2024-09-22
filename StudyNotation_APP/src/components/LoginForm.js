import React, { useState } from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

const LoginForm = (props) => {

    let SetLogedin=props.SetLogedin;
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        email:"",password:""
    })

    const[showpassword,SetShowpassword] = useState(false);

    function changeHandler(e){
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    

    function submitHandler(e) {
        e.preventDefault();
        SetLogedin(true);
        toast.success("Login Success");
        navigate("/dashboard");
      console.log(formData.password);
    }
  return (
    <div>
        <form  className='flex flex-col w-full gap-y-4 mt-6 '
         onSubmit={submitHandler}>
            <label className='w-full'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className=' text-pink-200'>*</sup>
                </p>
                <input required 
                type='email' 
                value={formData.email}
                name='email'
                onChange={changeHandler}
                placeholder='Enter email id'
                className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '
                >
                </input>
            </label>
            <label className='w-full relative'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className=' text-pink-200'>*</sup>
                </p>
                <input required 
                type= { showpassword ? ("text" ) : ("password")} 
                value={formData.password}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '
                >
                </input>
                <span className="absolute right-3 top-[38px] cursor-pointer "
                 onClick={() => SetShowpassword((prev) => !prev)}>
                    {showpassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p  className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button  className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">Log in</button>
        </form>
    </div>
  )
}

export default LoginForm;
