'use client'

import { collection, addDoc } from "firebase/firestore";
import firestore from "./firebase/firestore";

export default function Home() {


  // const onClickUpLoadButton = async () => {
  //   try{
  //     console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECTID)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

const onClickUpLoadButton = async () => {
  try{
    await addDoc(collection(firestore, "temp"),
    {
      first: "Ada312",
      last: "Lovelace",
      born: 1815
    })
  }catch(e){
    console.log(e)
  }
}

  return (
    <div>
      <button onClick={onClickUpLoadButton}>Ada Lovelace 등록</button>
    </div>
  )
}

// const onClickUpLoadButton = async () => {
//   try{
//     await addDoc(collection(firestore, "users"),
//     {
//       first: "Ada123",
//       last: "Lovelace",
//       born: 1815
//     })
//   }catch(e){
//     console.log(e)
//   }
// }