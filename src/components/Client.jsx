import React from 'react';
import {Button} from "@mui/material";
import './Client.css';
import {Link} from 'react-router-dom';


const Client = (props) => {
    const {_id, name, image } = props.client;
  return (
    <div className="card">
        <img src={image} alt="description" />
        <h3>{name}</h3>
        <Button client={props} variant="contained" sx={{marginTop:"0px", height:"30px"}} LinkComponent={Link} to={`./${_id}`} >Send</Button>
    </div>
  )
}

export default Client;
