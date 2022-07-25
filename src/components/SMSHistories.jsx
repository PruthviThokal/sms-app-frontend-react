import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SMSHistory from "./SMSHistory";
import './Client.css';


const URL = "https://aqueous-retreat-27884.herokuapp.com/api/sms/history";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const SMSHistories = () => {
    const [SMSHistories, setDoctor] = useState();
    useEffect(() => {
        fetchHandler().then((data) => { 
            console.log(data);
            setDoctor(data) 
        });
    }, []);
    return (
        <div>
            <div className="ul">
                {SMSHistories && SMSHistories.map((smsh, i) => (
                    (smsh.message) ?
                        <div className="li" key={i}>
                            <SMSHistory sms={smsh} key={i} />
                        </div>
                        : null
                ))}
            </div>
        </div>
    )
}

export default SMSHistories;