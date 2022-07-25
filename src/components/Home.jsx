import React from 'react';
import {Routes,Route} from "react-router-dom";
import Clients from "./Clients";
import Header from "./Header";
import SMsHistories from "./SMSHistories";
import Welcome from "./Welcome";
import ClientProfile from './ClientProfile';


const Home = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Welcome />} ></Route>
                <Route path="/clients" element={<Clients />} ></Route>
                <Route path="/clients/:id" element={<ClientProfile />} ></Route>
                <Route path="/sms/history" element={<SMsHistories />} ></Route>
            </Routes>
        </main>
    </div>
  )
}

export default Home;