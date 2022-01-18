import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { saveData } from '../action/utils/localStorage'

export const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        saveData("Juser", [])
        navigate("/login")
    }
    return (
        <div className='navbar'>
            <Link className='link' to="/">Dashboard</Link>
            <Link className='link' to="/admin">Admin</Link>
            <Link className='link' to="/applied">Applied Jobs</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
