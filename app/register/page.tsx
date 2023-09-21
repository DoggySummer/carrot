'use client'

import { useState } from 'react'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/fireauth';

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  /** 회원가입 */
  const signin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        alert('성공했습니다!')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
      })
  }

  /** 로그아웃 */
  const signout = () => {
    signOut(auth).then(()=>{
      alert('로그아웃 성공')
    }).catch((error) => {
      alert('오류발생')
    })
  }

  return (
    <div>
      회원가입입니다
      <input type='text' placeholder='id' onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input type='text' placeholder='비번' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button onClick={signin}>회원가입 버튼</button>
      <button onClick={signout}>로그아웃 버튼</button>
    </div>
  )
}

export default page