import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';


function Navbar(){
    return( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid"> 
                <a className="navbar-brand" href="#"><img src={logo} alt="imagelogo"/></a>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-self-middle p-3" id="navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about">My Learning</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#lecturers">Lecturers</a>
                        </li>
                            
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">Community</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help/Support</a>
                        </li>

                        <div className='btn-group' role='group'>
                            <button className="btn btn-dark">
                                <i className="fa-solid fa-gear"></i>
                            </button>

                            <button className='btn btn-dark'>
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