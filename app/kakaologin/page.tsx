'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { AuthOptions } from 'next-auth'

const page = () => {
  let session = useSession()
  // if(session){
  //   console.log(session)
  // }
  return (
    <>
      <button onClick={()=>{ signIn() }}>로그인버튼</button>
      <button onClick={()=>{ signOut() }}>로그아웃버튼</button> 
    </>
  )
}

export default page