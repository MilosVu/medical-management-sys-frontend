import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import ListUsers from './components/ListUsers';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompany from './components/PharmaceutalCompany/ListPharmaceuticalCompany';
import DashboardComponent from './components/Login/DashboardComponent';
import Register from './components/Login/Register';
import HomeComponent from './components/HomeComponent';

function App() {

  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div>
      <Router>

            <div className="container">
              <Routes>

                <Route path='/register' element= {< Register />}></Route>


                <Route path='/users' element= {< ListUsers />}></Route>

                <Route path='/' element= {< DashboardComponent />}></Route>
                <Route path='/dashboard' element= {< DashboardComponent />}></Route>
                <Route path='/home' element= {< HomeComponent />}></Route>

                <Route path='/medicines' element= {< ListMedicinesComponent />}></Route>
                <Route path='/add-medicine' element= {< CreateMedicineComponent />}></Route>

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompany />}></Route>
                
              </Routes>
            </div>

      </Router>
    </div>
  );
}

export default App;
