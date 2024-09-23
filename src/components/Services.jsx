import React from 'react'
import Title from './reusable/Title'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'

export default function Services() {
    return (
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                <article className='services'>
                    <span><FaCocktail /></span>
                    <h6>Free Cocktails</h6>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestiae quam natus velit pariatur quae ratione eaque cupiditate eum odit, blanditiis eligendi modi exercitationem beatae fuga delectus hic! Doloremque, magni!</p>
                </article>
                <article className='services'>
                    <span><FaHiking /></span>
                    <h6>Endless hiking</h6>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestiae quam natus velit pariatur quae ratione eaque cupiditate eum odit, blanditiis eligendi modi exercitationem beatae fuga delectus hic! Doloremque, magni!</p>
                </article>
                <article className='services'>
                    <span><FaShuttleVan /></span>
                    <h6>Free Shuttle</h6>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestiae quam natus velit pariatur quae ratione eaque cupiditate eum odit, blanditiis eligendi modi exercitationem beatae fuga delectus hic! Doloremque, magni!</p>
                </article>
                <article className='services'>
                    <span><FaBeer /></span>
                    <h6>Storages Beer</h6>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestiae quam natus velit pariatur quae ratione eaque cupiditate eum odit, blanditiis eligendi modi exercitationem beatae fuga delectus hic! Doloremque, magni!</p>
                </article>
            </div>
        </section>
    )
}