import React from 'react'
import { Link } from 'react-router-dom'

export default function Room({image, price, id, name}) {
    return (
        <article className='room'>
            <div className='img-container'>
                <img src={image} alt='single room' />
                <div className='price-top'>
                    <h6>₹ {price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${id}`} className='btn-primary room-link'>
                Feature
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    );
}