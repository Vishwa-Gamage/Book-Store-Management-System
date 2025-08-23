import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa"
import { useForm } from "react-hook-form"

const Register = () => {
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()

  // ✅ Password confirmation check

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match")
      return
    }
    setMessage("") // clear error
    console.log("Registered User Data:", data)
    // 👉 Here you will call API to register user
  }

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked")
    // 👉 implement Google OAuth here
  }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text" id="name" placeholder='Your Name'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          {/* Email */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
            <input
              {...register("email", { required: true })}
              type="email" id="email" placeholder='Email Address'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password" id="password" placeholder='Password'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          {/* Confirm Password */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="confirmPassword">Confirm Password</label>
            <input
              {...register("confirmPassword", { required: true })}
              type="password" id="confirmPassword" placeholder='Confirm Password'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          {/* Error Message */}
          {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}

          {/* Register Button */}
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>
              Register
            </button>
          </div>
        </form>

        {/* Switch to login */}
        <p className='align-baseline font-medium mt-4 text-sm'>
          Already have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link>
        </p>

        {/* Google sign in */}
        <div className='mt-4'>
          <button
            onClick={handleGoogleSignIn}
            className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
            <FaGoogle className='mr-2' />
            Sign up with Google
          </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Register
