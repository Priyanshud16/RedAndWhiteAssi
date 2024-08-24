import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostForm from '../Post/Post'
import GetForm from '../Pages/GetForm'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/post' element={<PostForm/>}/>
        <Route path='/get' element={<GetForm/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
