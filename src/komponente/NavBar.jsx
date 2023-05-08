import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import Link from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import "../pocetna.css";
import { NavLink } from 'react-router-dom'



const NavBar = ({ }) => {
  
    return (
        
        <div>
<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
        <NavLink to ="/sviTurniri"className="nav-link" >Svi turniri</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to ="/mojiTurniri"className="nav-link" >Moji turniri</NavLink>
        </li>
     
              </ul>
      
    </div>
  </div>
</nav>
<Outlet />
<div class="wrapper">
<form class="form">
  <div class="pageTitle title">Kontaktirajte nas </div>
  <div class="secondaryTitle title">Popunite formu i pitajte nas sta god vas zanima</div>
  <input type="text" class="name formEntry" placeholder="ime"></input>
  <input type="text" class="email formEntry" placeholder="email"/>
  <textarea class="message formEntry" placeholder="poruka"></textarea>
  <input type="checkbox" class="termsConditions" value="Term"></input>
  <label for="terms"> prihvatam <span>uslove koriscenja</span> i <span >privatnosti</span>.</label><br></br>
  <button class="submit formEntry" onclick="thanks()">Posalji</button>
</form>
</div>
<script src="app.js"></script>
</div>


    );
};
export default NavBar;