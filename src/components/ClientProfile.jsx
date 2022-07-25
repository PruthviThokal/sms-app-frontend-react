import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Client.css';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

const ClientProfile = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({});
    const [test, setTest] = useState();
    const id = useParams().id;
    var d;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`https://aqueous-retreat-27884.herokuapp.com/api/client/${id}`)
                .then((res) => res.data).then(data => setInputs(data))
        }
        fetchHandler();
    }, [id]);

    const { name, image, message, number } = inputs;

    const sendRequest = async () => {
        await axios.post(`https://aqueous-retreat-27884.herokuapp.com/api/client/sendsms`, {
            name: String(name),
            message: String(test),
            number: Number(number),
        }).then(res => {
            toast.success("SMS send successfully.")
            history("/sms/history")
        }).catch(err => {
            console.log(err);
        });
    }
    const testHandle = () => {
        sendRequest();
    }
    return (
        <div className="topp">
            <div>
                <div className="cardd">
                    <img src={image} />
                    <h3>Client Name is - {name}</h3>
                    <h3>Clinet Number is - {number}</h3>
                </div>
            </div>
            <div className="card2">
                <div>
                    <h1 className='hide'>Send Message</h1>
                    <textarea type='text' className='inpu' onChange={(e) => { setTest(e.target.value) }} placeholder='Type your Message here..' /><br></br>
                    <Button onClick={() => testHandle()} className='inpu2' variant="contained" style={{ float: "left", marginRight: "0px", marginTop: "10px", marginLeft: "115px", width: "10px", marginBottom: "20px" }}>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default ClientProfile;