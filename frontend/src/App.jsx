import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Button from "./components/common/Button";

function App() {
  return (
    <div className="w-screen min-h-screen max-w-[100vw] flex flex-col font-inter">
      <Navbar />

      <Routes></Routes>
    </div>
  );
}

export default App;
