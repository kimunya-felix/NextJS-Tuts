import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-around">
        <Link href='/'>
            <Image src='/public/assets/user-100.png'
            alt='site logo'
            width={35}
            height={35}
            ></Image>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
