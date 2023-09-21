'use client';

import React, { useState, useEffect, MouseEventHandler } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import firestore from '@/app/firebase/firestore'

export default function Home() {
  interface Itemtype {
    id?: string
    name?: string
    price?: number
  }
  const [items, setItems] = useState<Itemtype[]>([])

  const [newItem, setNewItem] = useState({name:'', price:0})

  const [total, setTotal] = useState(0)

  /** 아이템 추가 */
  const addItem:MouseEventHandler<HTMLButtonElement> = async(e) => {
    e.preventDefault()
    if(newItem.name!=='' && newItem.price!==0){
      setItems([...items, newItem])
      await addDoc(collection(firestore, "product"), {
        name: newItem.name,
        price: newItem.price
      })
      setNewItem({name:'', price:0})
    }
  }

  /** 아이템 읽기 */
  useEffect(()=>{
    const fetchData = async() => {
      const querySnapshot = await getDocs(collection(firestore, "product"))
      let itemArr:Itemtype[] = []
      querySnapshot.forEach((doc) =>{
        itemArr.push({...doc.data(), id:doc.id})
      })
      setItems(itemArr)

      /** 총합 계산 */
      const calculateTotal = () => {
        const totalPrice = itemArr.reduce((sum, item) => sum + (item.price ?? 0 ), 0)
        setTotal(totalPrice)
      }
      calculateTotal()
    }
    fetchData()
  },[])

  /** 아이템 삭제 */
  const deleteItem = async (id:string) => {
    await deleteDoc(doc(firestore, "product", id))
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>
          <form className='grid grid-cols-6 items-center text-black'>
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className='col-span-3 p-3 border'
              type='text'
              placeholder='Enter Item'
            />
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: parseFloat(e.target.value) })
              }
              className='col-span-2 p-3 border mx-3'
              type='number'
              placeholder='Enter $'
            />
            <button
              onClick={addItem}
              className='text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl'
              type='submit'
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li
                key={id}
                className='my-4 w-full flex justify-between bg-slate-950 text-white'
              >
                <div className='p-4 w-full flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id ?? '')}
                  className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? (
            ''
          ) : (
            <div className='flex justify-between p-3 text-white'>
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}