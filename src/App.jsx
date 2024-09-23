import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes,  } from "react-router-dom";
import Home from './pages/Home'
import Rooms from './components/Rooms'
import RoomPage from './pages/RoomPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path='/rooms' Component={Rooms} />
        <Route exact path='/rooms/:id' Component={RoomPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
