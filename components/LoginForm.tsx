'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from './Button'
import loginSchema from '@lib/LoginSchema'
import { IFormInput } from '@util/SignUpInput'

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors}, reset } = useForm<IFormInput>({resolver: yupResolver(loginSchema)})
    const onSubmitLogin: SubmitHandler<IFormInput> = (data) => {console.log(data); reset();}

  return (
    <div className='flex flex-center flex-col w-4/5 border border-slate-300 p-2'>
    <h2 className='pb-4'>Login Form</h2>
        <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmitLogin)}>
            <label htmlFor="email" className="block text-sm font-medium">
            Email:
            </label>
            <input {...register("email",{required: true})}
            type="email" id="email" name="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            <label htmlFor="password" className="block text-sm font-medium">
            Password:
            </label>
            <input {...register("password", {required: true})} 
            type="password" id="password" name="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            <Button label="Log In" disabled={false}/>
        </form>
  </div>
  )
}

export default LoginForm
