'use client'

const Kakao = () => {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
  const REDIRECT_URI = "http://localhost:3000/auth"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const kakao_code = new URL(window.location.href).searchParams.get("code")
  const KakaoLogin = () =>{
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <>
      <button className='bg-[#FEE500] w-36 h-12 mr-2' onClick={KakaoLogin}>카카오 SDK 로그인</button>
    </>
  )
}

export default Kakao