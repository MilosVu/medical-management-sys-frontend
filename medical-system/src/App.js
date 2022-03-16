import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListUsers from './components/ListUsers';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';

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
              </Routes>
            </div>

          <FooterComponent />
            
        </div>
      </Router>
    </div>
  );
}

export default App;
