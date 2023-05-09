import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './komponente/NavBar';
import SviTurniri from './komponente/SviTurniri';
import MojiTurniri from './komponente/MojiTurniri';

function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
    <Route path="/" element = {<NavBar />}>;
    <Route path="mojiTurniri" element ={<MojiTurniri/>}></Route>;
    <Route path="sviTurniri" element ={<SviTurniri/>}></Route>
    </Route>
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
