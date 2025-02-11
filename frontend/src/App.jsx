import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="w-screen min-h-screen max-w-[100vw] flex flex-col font-inter">
      <Navbar />

      {/* Use a single <Routes> component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
