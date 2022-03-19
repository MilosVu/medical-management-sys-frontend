import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ListUsers from './components/ListUsers';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompanyComponent from './components/PharmaceutalCompany/ListPharmaceuticalCompanyComponent';
import DashboardComponent from './components/Login/DashboardComponent';
import HomeComponent from './components/HomeComponent';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
import ListDoctorsComponent from './components/Doctors/ListDoctorsComponent';
<<<<<<< HEAD
import ListExaminationsComponent from './components/Examinations/ListExaminationsComponent';
=======
import DoctorDashboard from './components/Doctors/DoctorDashboard';
>>>>>>> 467e806019726e758c2b9a0edf4f2b14e2b9d970

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

                <Route path='/' element= {< DashboardComponent />}></Route>
                <Route path='/dashboard' element= {< DashboardComponent />}></Route>
                <Route path='/home' element= {< DashboardComponent />}></Route>

                <Route path='/doctors' element= {< ListDoctorsComponent />}></Route>
                <Route path='/doctors-dashboard' element= {< DoctorDashboard />}></Route>

                <Route path='/users' element= {< ListUsers />}></Route>
                <Route path='/medicines' element= {< ListMedicinesComponent />}></Route>
                <Route path='/add-medicine' element= {< CreateMedicineComponent />}></Route>

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompanyComponent />}></Route>
                <Route path='/add-pharmaceutical-company' element= {< CreatePharmaceuticalCompanyComponent />}></Route>
                
                

                <Route path='/examinations' element= {< ListExaminationsComponent />}></Route>

              </Routes>
            </div>

      </Router>
    </div>
  );
}

export default App;
