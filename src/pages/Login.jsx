import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginHandler } from '../Authentication/auth';


export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function loginUser() {
        let payload = { username: email, password };
        loginHandler(payload).then((data) => {
            console.log(data);
            if (data.details._id !== "") {
                navigate("/rooms");
            }
        }).catch((err) => console.log(err));
    }
    return (
        <div className='login-Form'>
            <TextField id="outlined-basic" label="username" variant="outlined" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <TextField id="outlined-basic" label="password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
            <Button variant="contained" onClick={loginUser}>Login</Button>
            <Typography color='black'> If not Signed In <Button onClick={() => navigate("/signup")}>Signup</Button></Typography>


        </div>
    );
};