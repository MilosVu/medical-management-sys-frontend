import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListUsers from './components/ListUsers';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
<<<<<<< HEAD
=======
import ListPharmaceuticalCompany from './components/PharmaceutalCompany/ListPharmaceuticalCompany';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
>>>>>>> 5e2deaa6aa2fbdfa85cdcdf4e2e360dcbbb8d3a4

function App() {
  return (
    <div>
      <Router>
        <div className='container'>

          <HeaderComponent />

            <div className="container">
              <Routes>
                <Route path='/' element= {< ListUsers />}></Route>
                <Route path='/users' element= {< ListUsers />}></Route>

                <Route path='/medicines' element= {< ListMedicinesComponent />}></Route>
                <Route path='/add-medicine' element= {< CreateMedicineComponent />}></Route>
<<<<<<< HEAD
=======

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompany />}></Route>
                <Route path='/add-pharmaceutical-company' element= {<CreatePharmaceuticalCompanyComponent/>}></Route>
>>>>>>> 5e2deaa6aa2fbdfa85cdcdf4e2e360dcbbb8d3a4
              </Routes>
            </div>

          <FooterComponent />
            
        </div>
      </Router>
    </div>
  );
}

export default App;
