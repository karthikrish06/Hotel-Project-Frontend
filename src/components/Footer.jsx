import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <h2>Farmers Resorts | Hotel Room Book</h2>
            <p>
                &copy; <span>{new Date().getDay()}</span> farmersresort.com - All copyrights reserved to Farmers Resort
            </p>
        </footer>
    )
}