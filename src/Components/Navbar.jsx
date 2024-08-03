import React from 'react'
import './NavBar.css'

function NavBar(props) {
    return <div className="header">
        <a href="/" className="name">KY NGO</a>
        <nav className="navbar">
            <a className = "Header-Buttons" href = "#ProjList">
                Projects
            </a>
            {/* <a href="/" className = "Header-Buttons">Experience</a> */}
        </nav>
    </div>
}

export default NavBar;