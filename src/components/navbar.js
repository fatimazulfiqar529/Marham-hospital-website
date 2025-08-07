import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';
import marham from '../assests/images/marham.png';
function Navbar(){
    const navigate=useNavigate();
    return(
<div className="navbar ps-3 h-auto">
    <nav className="navbar navbar-expand-lg">
<div className="container-fluid">
    <ul className="navbar-nav d-flex justify-content-start gap-5 w-100">
        <li className="nav-item">
            <a className="nav-link" href="#">
                <div className="d-flex flex-row justify-content-start">
                <img id="marham"src={marham}/>
                <p id="marh" className="mt-2">MARHAM</p>
                </div>
            </a>
        </li>
        <ul className="navbar-nav ms-5 ps-5 d-flex justify-content-end gap-3 w-100">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div class="dropdown">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Find Doctors</button>
                        <ul class="dropdown-menu">
                            <li> <a className="dropdown-item" href="#">Dermatologist</a></li>
                            <li> <a className="dropdown-item" href="#">Gynecologist</a></li>
                            <li> <a className="dropdown-item" href="#">Psychiatrist</a></li>
                            <li> <a className="dropdown-item" href="#">Psychologist</a></li>
                            <li> <a className="dropdown-item" href="#">Urologist</a></li>
                            <li> <a className="dropdown-item" href="#">General Physician</a></li>
                            <li> <a className="dropdown-item" href="#">Gastroenterologist</a></li>
                            <li> <a className="dropdown-item" href="#">Pediatrician</a></li>
                            <li> <a className="dropdown-item" href="#">General Practitioner</a></li>
                            <li> <a className="dropdown-item" href="#">Nutritionist</a></li>
                            <li> <a className="dropdown-item" href="#">All Specialities</a></li>
                        </ul>
                    </div>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                                    <div class="dropdown">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Hospitals</button>
                        <ul class="dropdown-menu">
                            <li> <a className="dropdown-item" href="#">Hospitals in Lahore</a></li>
                            <li> <a className="dropdown-item" href="#">Hospitals in Krachi</a></li>
                            <li> <a className="dropdown-item" href="#">Hospitals in Islamabad</a></li>
                            <li> <a className="dropdown-item" href="#">All Hospitals(City wise)</a></li>
                        </ul>
                    </div>
                </a>
            </li>
             <li className="nav-item">
                <a id="non" className="nav-link mt-2" href="#">Surgeries</a>
            </li> 
             <li className="nav-item">
                <a className="nav-link" href="#">
                                    <div class="dropdown">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Medicines</button>
                        <ul class="dropdown-menu">
                            <li> <a className="dropdown-item" href="#"></a></li>
                            <li> <a className="dropdown-item" href="#">All Medicines</a></li>
                            <li><a className="dropdown-item" href="#">Medicine Delivery </a></li>
                        </ul>
                    </div>
                </a>
            </li> 
             <li className="nav-item">
                <a id="non" className="nav-link mt-2" href="#">Shop</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="#">
                                    <div class="dropdown">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Labs</button>
                        <ul class="dropdown-menu">
                            <li> <a className="dropdown-item" href="#">Chugtai Lab</a></li>
                            <li> <a className="dropdown-item" href="#">Dr.Essa's Laboratory & Diagnostic Center</a></li>
                            <li> <a className="dropdown-item" href="#">Excel Labs</a></li>
                            <li> <a className="dropdown-item" href="#">All Labs</a></li>

                        </ul>
                    </div>
                </a>
            </li> 
             <li className="nav-item">
                <a id="non" className="nav-link mt-2" href="#">Forum</a>
            </li>  
             <li className="nav-item">
                <a id="non" className="nav-link mt-2" href="#">Join as Doctor</a>
            </li> 
             <li className="nav-item">
                <a className="nav-link" href="#">
                    <button id="phone">
                        <i className="fas fa-phone"></i>
                    </button>
                </a>
            </li> 
              <li className="nav-item">
                <a className="nav-link" href="#">
                    <button id="login" 
                    onClick={()=>navigate('/Login')}>Login
                    </button>
                </a>
            </li> 
        </ul>
    </ul>
</div>
    </nav>
</div>
    );
}
export default Navbar;