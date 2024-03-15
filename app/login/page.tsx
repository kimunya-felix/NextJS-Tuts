import { signIn } from "next-auth/react";
import LoginForm from "@components/LoginForm";

const page = () => {
  return (
    <div className="w-full flex flex-center flex-col items-center p-8">

        <h1 className="text-center p-4">Login Page</h1>
        <LoginForm />
      
    </div>
  )
}

export default page
