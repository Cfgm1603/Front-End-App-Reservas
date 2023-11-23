import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAppointmentComponent from './components/ListAppointmentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAppointmentComponent from './components/CreateAppointmentComponent';
import UpdateAppointmentComponent from "./components/UpdateAppointmentComponent";
import DbInitializerService from './services/DbInitializerService';
import SearchAvailabilityComponent from './components/SearchAvailabilityComponent';

function App() {
    useEffect(() => {
        // Initialize the database with initial data when the app starts
        const initializeDatabase = async () => {
            await DbInitializerService.initializeDatabase();
        };
        initializeDatabase();
    }, []);

    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<ListAppointmentComponent/>}/>
                        <Route path="/appointments" exact element={<ListAppointmentComponent/>}/>
                        {/* <Route path="/add-appointment" exact element={<CreateAppointmentComponent/>}/> */}
                        <Route path="/add-appointment" exact element={<SearchAvailabilityComponent/>}/>
                        <Route path="/update-appointment" exact element={<UpdateAppointmentComponent/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
export default App;
