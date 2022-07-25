import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Client from "./Client";
import './Client.css';


const URL = "https://aqueous-retreat-27884.herokuapp.com/api/clients";

const fetchHandler = async () => {
   return await axios.get(URL).then((res)=>res.data)
}

// async function getUserData() {
// 	try {
// 		const response = await axios.get(URL);
// 		console.log(response);
// 	}
// 	catch (error) {
// 		console.log(error);
// 	}
// }


const Clients = () => {
    const [clients, setClient] = useState();
    useEffect(() => {
        fetchHandler().then((data)=> setClient(data))
    }, []);
    return (
        <div>
            <div className="ul">
                {clients && clients.map((client, i) => (
                    <div className="li" key={i}>
                        <Client client={client} key={i} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients;