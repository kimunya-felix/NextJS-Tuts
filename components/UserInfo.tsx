"use client"
import { User } from "@app/types/User"
import { signOut } from 'next-auth/react'
import Button from "./Button"

type UserInfoProps = {
    user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
    const handleLogout = async () => {
        await signOut();
    }
  return (
    <div className="flex flex-col border-slate-300 p-2">
      <div>
        Id: {user.id}
      </div>
      <div>
        Name: {user.name}
      </div>
      <div>
        Email: {user.email}
      </div>
      
      <Button label="Log Out" disabled={false} onClick={handleLogout}/>
    </div>
  )
}

export default UserInfo
