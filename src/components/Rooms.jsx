import React, { useEffect, useState } from 'react'
import Title from './reusable/Title'
import data from '../data'
import Room from './reusable/Room'

export default function Rooms() {
    const [state, setState] = useState({ rooms: [],});

    const handleAllFilter = (name) => {
        let rooms = data;
        if (name !== 'type' && state.type !== 'all') {
            rooms = rooms.filter((room) => room.type === state.type);
        }
        if (name !== 'capacity' && state.capacity !== 1) {
            rooms = rooms.filter((room) => room.capacity === state.capacity);
        }
        if (name !== 'price') {
            rooms = rooms.filter(room => room.price <= state.price)
        }
        if (name !== 'breakfast' && state.breakfast) {
            rooms = rooms.filter(room => room.breakfast === true)
        }

        if (name !== 'pets' && state.pets) {
            rooms = rooms.filter(room => room.pets === true)
        }
        return rooms;
    }

    const handleChange = (e) => {
        const target = e.target;

        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = e.target.name;

        let rooms = handleAllFilter(name);

        if (name === 'type' && type !== 'all') {
            rooms = rooms.filter((room) => room.type === value);
        }

        if (name === 'capacity' && capacity !== 1) {
            rooms = rooms.filter((room) => room.capacity === parseInt(value));
        }

        if (name === 'price') {
            rooms = rooms.filter((room) => room.price <= parseInt(value));
        }

        if (name === 'breakfast') {
            rooms = rooms.filter((room) => room.breakfast === true);
        }

        if (name === 'pets') {
            rooms = rooms.filter((room) => room.pets === true);
        }

        setState((state) => ({
            ...state,
            [name]: value,
            rooms,
        }));
    };

    const getUnique = (data, value) => {
        return [...new Set(data.map(item => item[value]))];
    };

    useEffect(() => {
        const maxPrice = Math.max(...data.map(item => item.price))

        setState((state) => ({
            ...state,
            maxPrice,
            minPrice: 0,
            price: maxPrice,
            rooms: data,
            capacity: 1,
            type: 'all',
            breakfast: false,
            pets: false,
        }));
    }, []);
    return (
        <>
            <section className='filter-container'>
                <Title title='Search rooms' />
                <form className='filter-form'>
                    <div className='form-group'>
                        <label htmlFor='type'>rooms type</label>
                        <select name='type' id='type' value={state.type} className='form-control' onChange={handleChange}>
                            {['all', ...getUnique(data, 'type')].map((item, index) => {
                                return (<option value={item} key={index}>
                                    {item}
                                </option>)
                            })}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='type'>No of persons</label>
                        <select name='capacity' id='capacity' value={state.capacity} className='form-control' onChange={handleChange}>
                            {[...getUnique(data, 'capacity')].map((item, index) => {
                                return (<option value={item} key={index}>
                                    {item}
                                </option>)
                            })}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>Room price ₹{state.price}</label>
                        <input type='range' name='price' min={state.minPrice} max={state.maxPrice} id='price' value={state.price} onChange={handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <div className='single-extra'>
                            <input type='checkbox' name='breakfast' id='breakfast' checked={state.breakfast} onChange={handleChange} />
                            <lable htmlFor='breakfast'>Breakfast</lable>
                        </div>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={state.pets} onChange={handleChange} />
                        <lable htmlFor='pets'>Pets</lable>
                    </div>
                </form>
            </section>
            {state.rooms.length > 0 ? <section className='roomslist'>
                <div className='roomslist-center'>
                    {state.rooms.map((item) => (
                        <Room key={item.id} {...item} />
                    ))}
                </div>
            </section> :
                <div className='empty-search'>
                    <h3>Unfortunate no rooms matched your search preference</h3>
                </div>}
        </>
    );
}