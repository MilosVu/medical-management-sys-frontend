import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import ListUsers from './components/ListUsers';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompanyComponent from './components/PharmaceutalCompany/ListPharmaceuticalCompanyComponent';
import DashboardComponent from './components/Login/DashboardComponent';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
import ListDoctorsComponent from './components/Doctors/ListDoctorsComponent';
import ListExaminationsComponent from './components/Examinations/ListExaminationsComponent';
import DoctorDashboard from './components/Doctors/DoctorDashboard';
import ReceptionistDashboardComponent from './components/Receptionist/ReceptionistDashboardComponent';
import CreateDoctorComponent from './components/Doctors/CreateDoctorComponent';
import NotFoundComponent from './components/NotFoundComponent';

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

                <Route path='*' element= {< NotFoundComponent />}></Route>

                <Route path='/' element= {< DashboardComponent />}></Route>
                <Route path='/dashboard' element= {< DashboardComponent />}></Route>
                <Route path='/home' element= {< DashboardComponent />}></Route>

                <Route path='/doctors' element= {< ListDoctorsComponent />}></Route>
                <Route path='/doctor-dashboard' element= {< DoctorDashboard />}></Route>
                <Route path='/add-doctor' element={<CreateDoctorComponent/>}></Route>
                <Route path='/edit-doctor' element={<CreateDoctorComponent />}></Route>

                <Route path='/users' element= {< ListUsers />}></Route>
                <Route path='/medicines' element= {< ListMedicinesComponent />}></Route>
                <Route path='/add-medicine' element= {< CreateMedicineComponent />}></Route>

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompanyComponent />}></Route>
                <Route path='/add-pharmaceutical-company' element= {< CreatePharmaceuticalCompanyComponent />}></Route>
                
                

                <Route path='/examinations' element= {< ListExaminationsComponent />}></Route>


                <Route path='/receptionist-dashboard' element= {< ReceptionistDashboardComponent />}></Route>

                

              </Routes>
            </div>

      </Router>
    </div>
  );
}

export default App;
