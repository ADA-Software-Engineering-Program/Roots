import React from 'react';
import '../../pages/Tutor/Profile/Profile.css';
import profile from '@/assets/profile.png'
import { Link } from 'react-router-dom'

function Courses(active, setActive) { 
    return(
        <section className='tutor container-fluid p-3'>
            <div className='row'>
                <div className='col-12 tutor_heading'>
                    <h1 className='fw-bold'>Meet your Tutors!</h1>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>                  
                </div>

                <div className='col-12 col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 ms-xl-5 p-3 about'>
                <Link to='/tutor'>
                        <button className={`btn btn-outline-success me-4 ${active === 'about' && 'active'}`} onClick={() => setActive('about')} id='button'>About</button>
                    </Link>
                    <Link to='/courses'>
                        <button className={`btn btn-outline-success me-4 ${active === 'courses' && 'active'}`} onClick={() => setActive('courses')} id='button'>Courses</button>
                    </Link>
                    
                    <Link to='/review'>
                        <button className={`btn btn-outline-success me-4 ${active === 'review' && 'active'}`} onClick={() => setActive('review')} id='button'>Review</button>
                    </Link>

                    <Link to='/contact'>
                        <button className={`btn btn-outline-success me-4 ${active === 'contact' && 'active'}`} onClick={() => setActive('contact')} id='button'>Contact</button>
                    </Link> 

                    <div>
                        <h2 className='fw-bold fst-italic mt-5'>Courses Taught</h2>

                        <p><span className='fw-bold'>Basics</span>: Alphabetics in Igbo language</p>
                        <p><span className='fw-bold'>Elementary</span>: Simple greetings and expressions</p>
                        <p><span className='fw-bold'>Intermediate</span>: Everyday conversations in Igbo language</p>
                        <p><span className='fw-bold'>Advanced</span>: Writing in Igbo language</p>
                    </div>
                </div>
                
                <div className='col-12 col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <p className='col-6 fst-italic'>Total Course</p>
                                <p className='col-6 fst-italic text-end'>30</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Ratings</p>
                                <p className='col-6 fst-italic text-end'><i className="fa-solid fa-star"></i> 4.9 (153)</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Experience</p>
                                <p className='col-6 fst-italic text-end'>10 years</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Language</p>
                                <p className='col-6 fst-italic text-end'>English, Igbo</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Social</p>
                                <p className='col-6 fst-italic text-end'>
                                    <span className='me-2'>
                                        <i className="fa-brands fa-facebook-f"></i> 
                                    </span>
                                    <span className='me-2'>
                                        <i className="fa-brands fa-twitter"></i>
                                    </span>
                                    <i className="fa-brands fa-linkedin"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>                  
                </div>

                <div className='col-12 col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 ms-xl-5 p-3 about'>
                <Link to='/tutor'>
                        <button className={`btn btn-outline-success me-4 ${active === 'about' && 'active'}`} onClick={() => setActive('about')} id='button'>About</button>
                    </Link>
                    <Link to='/courses'>
                        <button className={`btn btn-outline-success me-4 ${active === 'courses' && 'active'}`} onClick={() => setActive('courses')} id='button'>Courses</button>
                    </Link>
                    
                    <Link to='/review'>
                        <button className={`btn btn-outline-success me-4 ${active === 'review' && 'active'}`} onClick={() => setActive('review')} id='button'>Review</button>
                    </Link>

                    <Link to='/contact'>
                        <button className={`btn btn-outline-success me-4 ${active === 'contact' && 'active'}`} onClick={() => setActive('contact')} id='button'>Contact</button>
                    </Link> 

                    <div>
                        <h2 className='fw-bold fst-italic mt-5'>Courses Taught</h2>

                        <p><span className='fw-bold'>Basics</span>: Alphabetics in Igbo language</p>
                        <p><span className='fw-bold'>Elementary</span>: Simple greetings and expressions</p>
                        <p><span className='fw-bold'>Intermediate</span>: Everyday conversations in Igbo language</p>
                        <p><span className='fw-bold'>Advanced</span>: Writing in Igbo language</p>
                    </div>
                </div>
                <div className='col-12 col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <p className='col-6 fst-italic'>Total Course</p>
                                <p className='col-6 fst-italic text-end'>30</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Ratings</p>
                                <p className='col-6 fst-italic text-end'><i className="fa-solid fa-star"></i> 4.9 (153)</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Experience</p>
                                <p className='col-6 fst-italic text-end'>10 years</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Language</p>
                                <p className='col-6 fst-italic text-end'>English, Igbo</p>
                            </div>

                            <div className='row'>
                                <p className='col-6 fst-italic'>Social</p>
                                <p className='col-6 fst-italic text-end'>
                                    <span className='me-2'>
                                        <i className="fa-brands fa-facebook-f"></i> 
                                    </span>
                                    <span className='me-2'>
                                        <i className="fa-brands fa-twitter"></i>
                                    </span>
                                    <i className="fa-brands fa-linkedin"></i>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                        <img alt='profile' src={profile} className = 'img-fluid'></img>                  
                </div>

                <div className='col-12 col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 ms-xl-5 p-3 about'>
                <Link to='/tutor'>
                        <button className={`btn btn-outline-success me-4 ${active === 'about' && 'active'}`} onClick={() => setActive('about')} id='button'>About</button>
                    </Link>
                    <Link to='/courses'>
                        <button className={`btn btn-outline-success me-4 ${active === 'courses' && 'active'}`} onClick={() => setActive('courses')} id='button'>Courses</button>
                    </Link>
                    
                    <Link to='/review'>
                        <button className={`btn btn-outline-success me-4 ${active === 'review' && 'active'}`} onClick={() => setActive('review')} id='button'>Review</button>
                    </Link>

                    <Link to='/contact'>
                        <button className={`btn btn-outline-success me-4 ${active === 'contact' && 'active'}`} onClick={() => setActive('contact')} id='button'>Contact</button>
                    </Link> 
                        <div>
                            <h2 className='fw-bold fst-italic mt-5'>Courses Taught</h2>

                            <p><span className='fw-bold'>Basics</span>: Alphabetics in Igbo language</p>
                            <p><span className='fw-bold'>Elementary</span>: Simple greetings and expressions</p>
                            <p><span className='fw-bold'>Intermediate</span>: Everyday conversations in Igbo language</p>
                            <p><span className='fw-bold'>Advanced</span>: Writing in Igbo language</p>
                        </div>
                    </div>

                    <div className='col-12 col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row'>
                                    <p className='col-6 fst-italic'>Total Course</p>
                                    <p className='col-6 fst-italic text-end'>30</p>
                                </div>

                                <div className='row'>
                                    <p className='col-6 fst-italic'>Ratings</p>
                                    <p className='col-6 fst-italic text-end'><i className="fa-solid fa-star"></i> 4.9 (153)</p>
                                </div>

                                <div className='row'>
                                    <p className='col-6 fst-italic'>Experience</p>
                                    <p className='col-6 fst-italic text-end'>10 years</p>
                                </div>

                                <div className='row'>
                                    <p className='col-6 fst-italic'>Language</p>
                                    <p className='col-6 fst-italic text-end'>English, Igbo</p>
                                </div>

                                <div className='row'>
                                    <p className='col-6 fst-italic'>Social</p>
                                    <p className='col-6 fst-italic text-end'>
                                        <span className='me-2'>
                                            <i className="fa-brands fa-facebook-f"></i> 
                                        </span>
                                        <span className='me-2'>
                                            <i className="fa-brands fa-twitter"></i>
                                        </span>
                                        <i className="fa-brands fa-linkedin"></i>
                                    </p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Courses;