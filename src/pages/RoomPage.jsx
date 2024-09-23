import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';


export default function RoomPage() {

    const { id } = useParams();

    const [room, setRoom] = useState({});

    useEffect(() => {
        console.log(id);
        setRoom(data.find((item) => item.id === id));
    }, [id]);
    return (
        <div>
            <header style={{ minHeight: '60vh', background: `url(${room.image}) center/cover no-repeat`, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <div className='banner'>
                    <h1>{room.name} room</h1>
                    <a className='btn-primary' href='/rooms'>back to rooms</a>
                </div>
            </header>
            <section className='single-room'>
                <div className='single-room-images'>
                    {room && room.roomImages && room.roomImages.map((item, index) => (
                        <img key={index} src={item} alt={room.name} />
                    ))}
                </div>
                
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details:</h3>
                        <p>{room.description}</p>
                    </article>

                    <article className='info'>
                        <h3>Information:</h3>
                        <h6>Price: ₹{room.price}</h6>
                        <h6>Size: {room.size}</h6>
                        <h6>max capacity: {" "} {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}
                        </h6>
                        <h6>{roompets ? 'pets allowed ' : 'no pets allowed '}</h6>
                        <h6>{room.breakfast && 'free breakfast included'}</h6>

                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>Extras:</h6>
                <ul className='extras'>
                    {room && room.extras && room.extras.map((item, index) => (<li key={idex}> - {item}</li>
                    ))};
                </ul>
            </section>
        </div>
    );
}