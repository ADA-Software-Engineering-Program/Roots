import React from 'react';
import './Profile.css';
import profile from '@/assets/profile.png'

function Tutor() {
    return(
        <section className='tutor container-fluid p-3'>
            <div className='row'>
                <div className='col-12 tutor_heading'>
                    <h2>Meet your Tutors!</h2>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-9 col-xl-9 col-lg-7 col-md-7 profile'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-3 col-xl-3 col-lg-5 col-md-5 col-sm-12 profile-details'>
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
                                <p className='col-6 fst-italic text-end'>English, French</p>
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
            <div className='row'>
                <div className='about-tutor col-7 p-2'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>

                <div className='col-7 certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-9 col-xl-9 col-lg-7 col-md-7 profile'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-3 col-xl-3 col-lg-5 col-md-5 col-sm-12 profile-details'>
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
                                <p className='col-6 fst-italic text-end'>English, French</p>
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
            <div className='row'>
                <div className='about-tutor col-7 p-2'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>

                <div className='col-7 certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-9 col-xl-9 col-lg-7 col-md-7 profile'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-3 col-xl-3 col-lg-5 col-md-5 col-sm-12 profile-details'>
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
                                <p className='col-6 fst-italic text-end'>English, French</p>
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

            <div className='row'>
                <div className='about-tutor col-7 p-2'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>

                <div className='col-7 certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas sint, sit maxime ab placeat corporis quo architecto. Minima reprehenderit sit libero commodi porro magni dolores provident qui omnis impedit?</p>
                </div>
            </div>
        </section>
    )
}

export default Tutor;