import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListUsers from './components/ListUsers';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompany from './components/PharmaceutalCompany/ListPharmaceuticalCompany';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';

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

                <Route path='/pharmaceutical-company' element= {< ListPharmaceuticalCompany />}></Route>
                <Route path='/add-pharmaceutical-company' element= {<CreatePharmaceuticalCompanyComponent/>}></Route>
              </Routes>
            </div>

          <FooterComponent />
            
        </div>
      </Router>
    </div>
  );
}

export default App;
