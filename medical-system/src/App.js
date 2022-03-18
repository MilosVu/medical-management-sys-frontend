import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListUsers from './components/ListUsers';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import HomeComponent from './components/HomeComponent';
import ListPharmaceuticalCompany from './components/PharmaceutalCompany/ListPharmaceuticalCompany';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
import NavbarComponent from './components/NavbarComponent';
import DashboardComponent from './components/DashboardComponent';
import Login from './components/Login/Login';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <Router>

            <div className="container">
              <Routes>

                <Route path='/users' element= {< ListUsers />}></Route>

                <Route path='/dashboard' element= {< DashboardComponent />}></Route>

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
