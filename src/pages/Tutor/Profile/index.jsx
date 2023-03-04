import React from 'react';
import './Profile.css';
import profile from '@/assets/profile.png'

function Tutor() {
    return(
        <section className='tutor container-fluid p-3'>
            <div className='row'>
                <div className='col-12 tutor_heading'>
                    <h1 className='fw-bold'>Meet your Tutors!</h1>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-9 col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-12 col-xl-3 col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-3'>
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
            <div className='row'>
                <div className='about-tutor col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 text-sm-center text-md-center text-lg-start text-xl-start'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p className='p-2'>
                        Juliana is a Level 1 Tutor of Igbo Language with over 7 years of experience. She has taught Igbo language to students of diverse backgrounds. Juliana strives to create a learning environment that is enjoyable, productive, and student-centric. She is passionate about imparting knowledge and also committed to helping her students reach their language learning goals.
                    </p>
                </div>

                <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-sm-center text-md-center text-lg-start text-xl-start certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>
                        Juliana is a Level 1 Tutor in Igbo Language, qualified as an Educationist and Linguistics Specialist. She holds certifications in Igbo Language Education, Applied Linguistics, and Educational Research.

                    </p>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-9 col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-12 col-xl-3 col-lg-5 col-md-5 col-sm-12 col-xs-12 profile-details'>
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
            <div className='row'>
                <div className='about-tutor col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 text-sm-center text-md-center text-lg-start text-xl-start'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p className='p-2'>
                        Juliana is a Level 1 Tutor of Igbo Language with over 7 years of experience. She has taught Igbo language to students of diverse backgrounds. Juliana strives to create a learning environment that is enjoyable, productive, and student-centric. She is passionate about imparting knowledge and also committed to helping her students reach their language learning goals.
                    </p>
                </div>

                <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-sm-center text-md-center text-lg-start text-xl-start certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>
                        Juliana is a Level 1 Tutor in Igbo Language, qualified as an Educationist and Linguistics Specialist. She holds certifications in Igbo Language Education, Applied Linguistics, and Educational Research.

                    </p>
                </div>
            </div>

            <div className='row profile-image'>
                <div className='col-12 col-xl-9 col-lg-7 col-md-6 col-sm-12 col-xs-12'>
                    <img alt='profile' src={profile} className = 'img-fluid'></img>
                </div>
                
                <div className='col-12 col-xl-3 col-lg-5 col-md-6 col-sm-12 col-xs-12 mb-3'>
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
            <div className='row'>
                <div className='about-tutor col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 text-sm-center text-md-center text-lg-start text-xl-start'>
                    <h2 className='about-heading fst-italic'>About Juliana</h2>
                    <p className='p-2'>
                        Juliana is a Level 1 Tutor of Igbo Language with over 7 years of experience. She has taught Igbo language to students of diverse backgrounds. Juliana strives to create a learning environment that is enjoyable, productive, and student-centric. She is passionate about imparting knowledge and also committed to helping her students reach their language learning goals.
                    </p>
                </div>

                <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-sm-center text-md-center text-lg-start text-xl-start certification'>
                    <h2 className='fst-italic'>Certifications</h2>
                    <p>
                        Juliana is a Level 1 Tutor in Igbo Language, qualified as an Educationist and Linguistics Specialist. She holds certifications in Igbo Language Education, Applied Linguistics, and Educational Research.

                    </p>
                </div>
            </div>
        </section>
    )
}

export default Tutor;