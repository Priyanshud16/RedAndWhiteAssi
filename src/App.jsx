import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostForm from './Post/Post'
import Navbar from './Component/Navbar'
import AllRoutes from './Component/AllRoutes'

function App() {


  return (
    <div>
    <Navbar/>
    <AllRoutes/>
    </div>
  )
}

export default App
