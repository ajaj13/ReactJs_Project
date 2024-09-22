import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({SetLogedin}) => {

    const[formData,setFormData] = useState([{
        firstname:"",lastname:"",email:"",
        password:"", confirmpassword:""
    }])

    const navigate=useNavigate(); 

    const[showpassword,SetShowpassword] = useState(false);
    const[showconfirmpassword,SetShowconfirmpassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event){
        
        setFormData( (prevData) =>(
            
               { ...prevData,
                [event.target.name]:event.target.value

               
            }
        )
        )
        
    }

    function submitHandler(e){
        e.preventDefault();
        
        if(formData.password !== formData.confirmpassword){
            toast.error("Password Does not match");
            return;
        }

        SetLogedin(true);
        toast.success("Account Created Successfully")
        const accountData = {
            ...formData,
        };

        const finaldata = {
            ...accountData,accountType
        }
        console.log("printing account data")
        console.log(finaldata);
        
        navigate("/dashboard")
           


    }

  return (
    <div>
        
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-6" >
            <button onClick={ () => setAccountType("student")}
             className={`${
                accountType === "student"
                  ? "bg-richblack-900 text-richblack-5"
                  : "bg-transparent text-richblack-200 "
              } py-2 px-5 rounded-full transition-all`}
            >Student</button>
            <button onClick={ () => setAccountType("instructor")}
             className={`${
                accountType === "instructor"
                  ? "bg-richblack-900 text-richblack-5"
                  : "bg-transparent text-richblack-200 "
              } py-2 px-5 rounded-full transition-all`}           
            >Instructor</button>
        </div>

        <form onSubmit={submitHandler}  >
            <div  className='flex gap-x-4 mt-6'>
                <label  htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        First Name<sup>*</sup>
                    </p>
                    <input required 
                    type='text' 
                    value={formData.firstname}
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First name'
                    className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '>
                    </input>
                </label>
                <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Last Name<sup>*</sup>
                    </p>
                    <input required 
                    type='text' 
                    value={formData.lastname}
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '>
                    </input>
                </label>
            </div>

            <div className='mt-4'>
                <label htmlFor="" className="w-full ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup>*</sup>
                    </p>
                    <input required 
                    type='email' 
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '>
                    </input>
                </label>
            </div>
            

            <div  className='flex gap-x-4 mt-4'>
                <label htmlFor="" className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create Password<sup>*</sup>
                    </p>
                    <input required 
                    type={ showpassword ? ("text" ) : ("password")} 
                    value={formData.password}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter password'
                    className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '>
                    </input>
                    <span className="absolute right-3 top-[38px] cursor-pointer z-10"
                    onClick={() => SetShowpassword((prev) => !prev)}>
                        {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>
                <label htmlFor="" className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Confirm Password<sup>*</sup>
                    </p>
                    <input required 
                    type={ showconfirmpassword ? ("text" ) : ("password")} 
                    value={formData.confirmpassword}
                    name='confirmpassword'
                    onChange={changeHandler}
                    placeholder='Re-Enter Password'
                    className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[1px] '>
                    </input>
                    <span className="absolute right-3 top-[38px] cursor-pointer z-10" 
                     onClick={() => SetShowconfirmpassword((prev) => !prev)}>
                        {showconfirmpassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>
            </div>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                Sign Up</button>
        </form>
    </div>
  )
}

export default SignupForm
