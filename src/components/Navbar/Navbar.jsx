import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar(){
    return( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid"> 
                <Link to='/'>
                    <img src={logo} alt="imagelogo"/>
                </Link>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-self-middle p-3" id="navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className='nav-link active' to ='/'>My Learning</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to ='/tutor'>Lecturers</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link className='nav-link' to ='/community'>Community</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className='nav-link' to ='/help'>Help/Support</Link>
                        </li>

                        <div className='btn-group' role='group'>
                            <Link to='/profile'>
                                <button className="btn btn-outline-dark">
                                    <i className="fa-solid fa-gear"></i>
                                </button>
                            </Link>

                            <button className='btn btn-outline-dark'>
                                <i className="fa-regular fa-user"></i>
                            </button>
                        </div>
                        
                    </ul>
                </div>
            </div>  
        </nav>
    )
};

export default Navbar;