import { useState } from "react";
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home"
import "./style/home.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="home-box" >
        <Home searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default App
