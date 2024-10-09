import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signupHandler } from '../Authentication/auth';

export const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function signUPUser() {
        let payload = { username, email, password };
        signupHandler(payload).then((data) => {
            console.log(data);
            if (data._id !== "") {
                navigate("/login");
            }
        }).catch((err) => console.log(err));
    }
    return (
        <div className='signup-Form'>
            <TextField id="outlined-basic" label="username" variant="outlined" type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
            <TextField id="outlined-basic" label="email" variant="outlined" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <TextField id="outlined-basic" label="password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
            <Button variant="contained" onClick={signUPUser}>Register</Button>
            <Typography color='black'> Already Registered <Button onClick={() => navigate("/login")}>Login</Button></Typography>

        </div>
    );
};