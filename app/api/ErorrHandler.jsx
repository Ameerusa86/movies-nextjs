"use client"

import React, { useEffect } from 'react'

const ErorrHandler = ({error, reset}) => {
    useEffect(()=>{
        console.error(error)
    },[error])
  return (
    <div>
        <h2>Something went wrong</h2>
        <button onClick={()=>reset}>Try Again</button>
    </div>
  )
}

export default ErorrHandler