import React from 'react';
import {Link} from 'react-router-dom';
import '../User/Dashboard/Dashboard.css'

function Dashboard(){
    return(
        <div className='row justify-content-evenly p-3'>
            <div className='row basics p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Basics</h3>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h5 className='p-2 '>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    
                    <Link to='/course'>
                        <button className='btn btn-success mt-3 align-self-center' id='buttons'>View Program</button>
                    </Link>
                </div>
                

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Pronouns-pvwmup3n979dhwkkheuzkm5xbpcw32bnhlqdedkfeo.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Verbs-pu6dv3jkcag420dobfvzzblcxb469isdygomjq2y9s.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>
            </div>
            
            <div className='row elementary p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Elementary</h3>
                </div>
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Verbs-pu6dv3jkcag420dobfvzzblcxb469isdygomjq2y9s.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>
            </div>
          
            <div className='row intermediate p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Intermediate</h3>
                </div>
                
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Basic-Igbo-Sentences-Middle-1-pvzbbgnj8r7ptm6oz1906rwz5ejfhlyly72cm6gow0.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                     
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Possessive-Pronouns-pwb7w805ky0u7l1uup8i5vqn1i5aaa2g7gsxq835s0.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>
            </div>
            
            <div className='row upper-elementary p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Upper Elementary</h3>
                </div>
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Verbs-pu6dv3jkcag420dobfvzzblcxb469isdygomjq2y9s.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>
            </div>
           
            <div className='row advanced p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Advanced</h3>
                </div>
                
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Simple-Past-Tense-pw92szin8exnik8ia38rd7aqwgxhxqkonbpi9iygw0.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Family-in-Igbo-pxo32x9s6yz9u7o918txe3l4zr6f3nkbpc5tfh0w74.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Adjectives-in-Igbo-EDIT-2-2-pyoar433j3lx1q1t0fx9pfazxye2u23pa3v6qo775s.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                     
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center card-holder'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/elementor/thumbs/Igbo-Phrases-Blog-image-1-ptl5wfj2bndb6rjdkrftv0vgaq9ehm3ucweo9uk6io.png?w=1200&ssl=1' alt='igbo alphabet'/>

                    <h5 className='p-2'>Charles Lukwan</h5>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <Link to="/course">
                    <button className='btn btn-success mt-3' id='buttons'>View Program</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;