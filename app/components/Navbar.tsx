import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-betweenp-2'>
      <ul className='flex'>
        <li className='p-2 cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/about'>About</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/profile'>Profile</Link>
        </li>
      </ul>
      <ul className='flex'>
        <li className='p-2 cursor-pointer'>
          <Link href='/login'>로그인</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/register'>회원가입</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar