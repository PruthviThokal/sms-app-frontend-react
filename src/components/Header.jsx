import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AppBar,Typography, Toolbar,Tabs, Tab} from '@mui/material';

const Header = () => {
    const [value, setValue]= useState({});
  return (
    <div>
        <AppBar position="sticky">
        <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography><Tab label="Home"/></Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit" value={value} indicatorColor="primary" onChange={(e,val)=>setValue(val)} >
                    <Tab LinkComponent={NavLink} to="/clients" label="Clients"/>
                    <Tab LinkComponent={NavLink} to="/sms/history" label="SMS History"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;