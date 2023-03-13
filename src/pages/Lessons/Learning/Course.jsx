import React from 'react';
import {Link} from 'react-router-dom';
import './Course.css'


const CourseContent = () =>{
    const buttons = document.getElementsByTagName('button');
    const iframe = document.getElementById('iframe');
    const name = document.getElementById('video-heading');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (){
            iframe.src = this.dataset.src;
            name.innerHTML = this.dataset.name;
        });
        
    }
    return(
        <section className='container-fluid course-content p-5'>
            <div className='row justify-content-between p-2'>
                <div className='col-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 border rounded border-top-0 shadow-sm p-3'>
                    <div className='col-12 p-4'> 
                        <Link to ='/dashboard' className='link'>Courses <i className="fa-solid fa-chevron-right"></i></Link>

                        <a className='link'> Alphabetics in Igbo Language</a>
                    </div>
                    <div className='video-holder'>
                        <iframe width="100%" height="315" src="https://naijish.com/the-igbo-alphabet/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen id='iframe'></iframe>
                        <h3 id='video-heading'>Getting started</h3>
                        <p>By Juliana Uchendu, Educator and Linguistics expert.</p>

                        <div className='border rounded mt-5 p-4'>
                            <p className='text-muted fs-small'>Course 1 of 8 </p>
                            <h6>Course Introduction</h6>

                            <div className='progress'>
                                <div className="progress-bar w-25" id='buttons' role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>2 completed out of 8 </p>

                        </div>
                    </div>
                    <div className='course-outline'>
                        <h3 className='p-2'>Course 1 - Introduction</h3>
                        <ul>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Getting started' data-src='https://naijish.com/the-igbo-alphabet/'>Getting started</button>  </li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Alphabetical order' data-src='https://www.youtube.com/embed/PCx8iR4R-4I'>Alphabetical order</button></li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Sounds and sights' data-src='https://www.youtube.com/embed/n_s183dkiCg'>Sounds and sights</button></li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Oral exercises' data-src='https://naijish.com/how-to-pronounce-words-in-igbo'>Oral exercises</button></li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Interactive Quiz' data-src='https://learningonline.typeform.com/to/kUYPkX?typeform-source=testyourlanguage.com'>Interactive quiz</button></li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Word formation' data-src='https://naijish.com/basic-igbo-sentences/'>Word formation</button></li>
                            <li className='border-bottom p-3'><button className='btn btn-outline' data-name='Simple greeting' data-src='https://www.youtube.com/embed/AHVtmh9ssX4'>Simple greetings</button></li>
                            <li className='p-3'>Practice questions</li>
                        </ul>

                        <h3 className='p-2'>Course 2 - Writing in Igbo</h3>
                        <h3 className='p-2'>Course 3 - Daily interactions in Igbo</h3>
                    </div>
                </div>

                <div className='col-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 border border-top-0 rounded shadow-sm p-3'>
                    <h3 className='text-center'>Course Overview</h3>
                    <p className='text-muted'>COURSE 1 - INTRODUCTION</p>
                    <ul>
                        <li className='p-3'>Getting started</li>
                        <li className='p-3'>Alphabetical order</li>
                        <li className='p-3'>Sounds and sights</li>
                        <li className='p-3'>Oral exercises</li>
                        <li className='p-3'>Interactive quiz</li>
                        <li className='p-3'>Word formation</li>
                        <li className='p-3'>Simple greetings</li>
                        <li className='p-3'>Practice questions</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default CourseContent;