'use client'

import Kakao from '../components/kakao';
import KakaoLogin from 'react-kakao-login'
import { useState } from 'react';

const page = () => {

  const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY
  const [userInfo, setUserInfo] = useState()
  const kakaoOnSuccess = async(data:any)=> {
    console.log(data)
    setUserInfo(data)
  }
  const kakaoOnFailure = (error:any) => {
    console.log(error)
  }
  return (
    <div>
      <Kakao />
      <KakaoLogin
        token={KAKAO_JS_KEY!}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      >카카오 REACT 로그인
      </KakaoLogin>
      {
        userInfo ? userInfo.profile.properties.nickname + '님 안녕하세요' : '데이터 없어요'
      }
    </div>
  )
}

export default page