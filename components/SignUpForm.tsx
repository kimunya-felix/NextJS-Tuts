'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from './Button'
import signUpSchema from '@lib/SignUpSchema'
import { IFormInput } from '@util/SignUpInput'

const SignUpForm = () => {

  const { register, handleSubmit, formState: { errors}, reset } = useForm<IFormInput>({resolver: yupResolver(signUpSchema)})
  const onSubmit: SubmitHandler<IFormInput> = (data) => {console.log(data); reset()}

  return (
  <div className='flex flex-center flex-col w-4/5 border border-slate-300 p-2'>
    <h2 className='pb-4'>Sign up Form</h2>
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="block text-sm font-medium">
          Username:
        </label>
        <input {...register("username",{required: true})} 
        type="text" id="username" name="username"  
        className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.username && <p>{errors.username.message}</p> }

        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          {...register("email",{required: true})} 
          type="email" id="email" name="email" 
          className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && <p>{errors.email.message}</p> }

        <label htmlFor="password" className="block text-sm font-medium">
          Password:
        </label>
        <input
          {...register("password", {required: true})} 
          type="password" id="password" name="password" 
          className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.password && <p>{errors.password.message}</p> }

        <label htmlFor="confirmPassword"  className="block text-sm font-medium">
          Confirm Password:
        </label>
        <input
          {...register("confirmPassword", {required: true})} 
          type="password" id="confirmPassword" name="confirmPassword" 
          className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p> }

        <Button label="Sign Up" disabled={false}/>
      </form>
  </div>
  )
}

export default SignUpForm
