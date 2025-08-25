import React from "react"
import { Link } from "gatsby"
import "../styles/base.css"

export default function Layout({ children }) {
    return (
        <div className="nav-container">
            <nav className="nav-wrapper">
                <Link to="/" className="link">Home</Link>
                <Link to="/gallery" className="link">Gallery</Link>
                <Link to="/about" className="link">About Us</Link>
                <Link to="/contact" className="link">Get In Touch</Link>
            </nav>
            <main className="flex-1 relative overflow-hidden">{children}</main>
        </div>
    )
}
