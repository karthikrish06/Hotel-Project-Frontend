import React from 'react'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <>
            <header className='defaultHero'>
                <div className='banner'>
                    <h1>Luxirious rooms</h1>
                    <p>deluxe rooms starting at ₹999</p>
                    <a className='btn-primary' href='/rooms'>Our rooms</a>
                </div>
            </header>
            <FeaturedRooms />
            <Services />
        </>
    )
}