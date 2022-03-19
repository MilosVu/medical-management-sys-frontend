import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import ListUsers from './components/ListUsers';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompanyComponent from './components/PharmaceutalCompany/ListPharmaceuticalCompanyComponent';
import DashboardComponent from './components/Login/DashboardComponent';
import Register from './components/Login/Register';
import HomeComponent from './components/HomeComponent';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
import PatientRegister from './components/Login/PatientRegister';
import ListDoctorsComponent from './components/Doctors/ListDoctorsComponent';

function App() {

  const [token, setToken] = useState();

  // if(!token) {
  //   return <DashboardComponent setToken={setToken} />
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
                <Route path='/register' element= {< PatientRegister />}></Route>

                <Route path='/home' element= {< HomeComponent />}></Route>

                <Route path='/medicines' element= {< ListMedicinesComponent />}></Route>
                <Route path='/add-medicine' element= {< CreateMedicineComponent />}></Route>

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompanyComponent />}></Route>
                <Route path='/add-pharmaceutical-company' element= {< CreatePharmaceuticalCompanyComponent />}></Route>
                
                <Route path='/doctors' element= {< ListDoctorsComponent />}></Route>
                

              </Routes>
            </div>

      </Router>
    </div>
  );
}

export default App;
