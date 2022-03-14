import logo from './logo.svg';
import './App.css';
import ListUsers from './components/ListUsers';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
            <ListUsers/>
        </div>
      <FooterComponent />
    </div>
  );
}

export default App;
