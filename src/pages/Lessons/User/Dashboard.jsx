import React from 'react';
import '../../User/Dashboard/Dashboard.css';
import Lessons from '..';
import {Link} from 'react-router-dom'

function LearningDashboard() {
    return (
        <section className='container-fluid'>
            <div className='row p-4'>
                <div className="col-12">
                    <h2 className='dashboard_heading fw-bolder'>
                        Well done,
                    </h2>
                    <p>
                       A new course has been added to your learning. If you encounter any problem, don't hesitate to contact us.
                    </p>
                </div>

                <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 input-group align-self-end ms-xl-auto ms-lg-auto ms-md-auto w-xl-25 w-lg-25 w-md-25">
                    <button className='input-group-append btn btn-outline-success border border-end-0' id='search-btn'><i className='fa-solid fa-search'></i></button>
                    <input type="text" className="form-control m-0 border border-start-0 p-0" placeholder="Search Courses" aria-label="Search Courses" aria-describedby="buttons" id='search-input'/>
                </div>

            </div>

            <div className='row p-5'>
                <div className='col-4 col-lg-4 col-md-6 col-sm-6 p-0'>
                    <img alt='woman smiling' src='https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21hbiUyMHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='img-fluid'></img>
                </div>

                <div className='col-8 col-lg-8 col-md-6 col-sm-6 user-info rounded'>
                    <p className='heart-icon text-end'>
                        <i className="fa-regular fa-heart"></i>
                    </p>
                    <h4 className='fw-bolder'>Charles Lukman</h4>
                    <p className='text-muted'>Linguistic Expert</p>

                    <h4 className='fw-bold mt-3 mb-3'>Understanding Alphabets in Igbo Language</h4>
                    <div className='progress'>
                        <div className="progress-bar w-25" id='buttons' role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
                    <p>Overall Progress</p>
                    <Link to='/content'>
                        <button className='btn btn-success' id='buttons'>Continue</button>
                    </Link>
                </div>
            </div>
            <Lessons/>
        </section>
    )
}
export default LearningDashboard;