import React, { useEffect, useState } from 'react'

function GetForm() {
const [Data,setData]=useState([])
  useEffect(()=>{
    FetchData()
  },[])
  async function FetchData() {
    try {
      const res=await fetch("http://localhost:3000/posts")
      const data=await res.json()
      setData(data)
    } catch (error) {
      
    }
  }
  return (
    <div>
      {
        Data.map((ele)=>{
       return <div style={{border:"1px solid black"}}>
        <p>category:{ele.category}</p>
        <p>title:{ele.title}</p>
        <p>blogger:{ele.blogger_name}</p>
       Image: {ele.image && <img src={ele.image} alt={ele.title} style={{ maxWidth: '100%', height: 'auto' }} />}
        <p>description:{ele.description}</p>
       </div>
        })
      }
    </div>
  )
}

export default GetForm
