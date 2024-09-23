import React from 'react';
import Title from './reusable/Title';
import Room from './reusable/Room';
import data from '../data';


export default function FeaturedRooms() {
    return (
        <section className='featured-rooms'>
            <Title title='featured rooms' />
            <div className='featured-rooms-center'>
                <Room {...data[0]} />
                <Room {...data[1]} />
                <Room {...data[2]} />
            </div>
        </section>
    );
}