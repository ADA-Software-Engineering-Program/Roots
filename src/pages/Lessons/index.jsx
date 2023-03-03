import React from 'react';
import {Link} from 'react-router-dom';
import '../User/Dashboard/Dashboard.css'

function Dashboard(){
    return(
        <div className='row'>
            <div className='row basics p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Basics</h3>
                    <p> See more </p>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h4 className='p-2 '>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    
                    <Link to='/course'>
                        <button className='btn btn-success mt-5 align-self-center' id='buttons'>View Program</button>
                    </Link>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/v4-460px-Learn-Igbo-Language-Step-5.jpg.webp' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i.pinimg.com/originals/17/2f/5b/172f5b34db2f3908b2aac3e03368a106.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>
            </div>
            
            <div className='row elementary p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Elementary</h3>
                    <p> See more </p>
                </div>
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/v4-460px-Learn-Igbo-Language-Step-5.jpg.webp' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i.pinimg.com/originals/17/2f/5b/172f5b34db2f3908b2aac3e03368a106.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>
            </div>

            
            <div className='row intermediate p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Intermediate</h3>
                    <p> See more </p>
                </div>
                
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/v4-460px-Learn-Igbo-Language-Step-5.jpg.webp' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i.pinimg.com/originals/17/2f/5b/172f5b34db2f3908b2aac3e03368a106.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>
            </div>

            
            <div className='row upper-intermediate p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Upper Intermediate</h3>
                    <p> See more </p>
                </div>
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/v4-460px-Learn-Igbo-Language-Step-5.jpg.webp' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i.pinimg.com/originals/17/2f/5b/172f5b34db2f3908b2aac3e03368a106.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>
            </div>

            
            <div className='row advanced p-3 justify-content-evenly'>
                <div className='col-12 d-flex justify-content-between my-2'>
                    <h3>Advance</h3>
                    <p> See more </p>
                </div>
                
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Pronunciation-Blog-image-2.png?resize=1024%2C493&ssl=1' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://www.wikihow.com/images/thumb/1/12/Learn-Igbo-Language-Step-5.jpg/v4-460px-Learn-Igbo-Language-Step-5.jpg.webp' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>

                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i0.wp.com/naijish.com/wp-content/uploads/2022/08/Igbo-Alphabet-Header-5.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success mt-5' id='buttons'>View Program</button>
                </div>
                
                <div className='col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5 m-3 shadow-sm p-2 text-center'>
                    <img className='img-fluid' src='https://i.pinimg.com/originals/17/2f/5b/172f5b34db2f3908b2aac3e03368a106.png' alt='igbo alphabet'/>

                    <h4 className='p-2'>Charles Lukwan</h4>
                    <p>Learn the basics of Igbo language from Alphabetics.</p>
                    <button className='btn btn-success' id='buttons'>View Program</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;