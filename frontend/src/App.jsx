import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/common/Navbar'

function App() {


  return (
    <div>
      <Navbar />
      <Routes></Routes>
    </div>
  )
}

export default App
