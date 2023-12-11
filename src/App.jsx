import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import "./style/home.css"
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="home-box" >
        <Home searchTerm={searchTerm} />
      </div>
      <IoIosArrowUp className="moveup" onClick={() => { goToTop() }} style={{ display: `${showTopBtn ? "block" : "none"}`, color:"#fff" }} />
    </div>
  )
}

export default App


