import React from 'react'

const Naver = () => {
  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
  const REDIRECT_URI = "http://localhost:3000/login"
  const STATE = "false"
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&state=${STATE}`

  const NaverLogin = () =>{
    window.location.href = NAVER_AUTH_URL
  }
  return (
    <button className='bg-green-500 w-12 h-12' onClick={NaverLogin}>네이버 로그인</button>
  )
}

export default Naver