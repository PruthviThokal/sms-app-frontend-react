import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';
import './Client.css';

const Welcome = () => {
  return (
    <div>
        <div className="wc">
            <h1>Kisan Network SMS app</h1>
            <NavLink to="/clients" style={{color:"white"}} >
            <Button variant="outlined">Send Message</Button>
            </NavLink><br/> <br/>
            <NavLink to="/sms/history" style={{mt : 2 , color:"white"}} >
            <Button variant="outlined">SMS History</Button>
            </NavLink>
        </div>
    </div>
  )
}

export default Welcome;