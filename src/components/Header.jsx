import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    Farmers Resort Booking
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}