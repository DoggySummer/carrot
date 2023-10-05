'use client'

import React, { useEffect } from 'react'

const page = () => {
  const code = new URL(document.location.toString()).searchParams.get('code')
  useEffect(()=>{
    console.log(code)
  },[])
  return (
    <div>
      되고있냐
    </div>
  )
}

export default page