import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import {BsGear} from 'react-icons/bs'


function Navbar(){
    
    const {pathname} = useLocation()
    
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
                            <Link className={`nav-link ${pathname === '/' && 'active'}`} to ='/'>My Learning</Link>
                        </li>

                        <li className="nav-item">
                            <Link  className={`nav-link ${pathname === '/tutor' && 'active'}`} to ='/tutor'>Lecturers</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link  className={`nav-link ${pathname === '/community' && 'active'}`} to ='/community'>Community</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link  className={`nav-link ${pathname === '/support' && 'active'}`} to ='/support'>Support</Link>
                        </li>

                        <Link className={`nav-link p-0 ${pathname === '/settings' && 'active'}`} to='/settings'>
                            <button className='btn btn-outline-success profile-button'>
                                <BsGear/>
                            </button>
                        </Link>                     
                    </ul>
                </div>
            </div>  
        </nav>
    )
};

export default Navbar;