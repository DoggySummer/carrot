'use client'

import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth";
import auth from '../firebase/fireauth';
import { onAuthStateChanged } from 'firebase/auth'
import Naver from '../components/naver';

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState(false)
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true)
        const uid = user.uid;

      } else {
        setIsUser(false)
      }
    });
  },[])

  return (
    <div>
      로그인입니다
      <input type='text' placeholder='id' onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input type='text' placeholder='비번' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button onClick={signin}>로그인 버튼</button>
      <Naver />
      {isUser && <div>유저가 있스빈다</div>}
    </div>
  )
}

export default page