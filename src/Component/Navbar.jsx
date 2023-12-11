/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "../style/navbar.css"
import logo from "../assets/redditimg.png"

import { CiSearch } from "react-icons/ci";

function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <div className="navbar">
            <div className="img-box"><img src={logo} alt="" /></div>
            <div className="input-box"><input type="text" placeholder="Search post by title" onChange={(e) => {
                setSearchTerm(e.target.value)
                value = { searchTerm }
            }} />
                <CiSearch className="icon-search" />
            </div>
            <div><button>Log in</button></div>
        </div>
    )
}

export default Navbar
