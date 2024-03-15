import React from 'react'
import SignUpForm from '@components/SignUpForm'
const page = () => {
  return (
    <div className='w-full flex flex-center flex-col items-center p-8'>
      <h1 className="text-center p-4">Login Page</h1>
        <SignUpForm />
    </div>
  )
}

export default page
