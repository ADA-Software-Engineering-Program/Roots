import React from 'react';
import '../../User/Dashboard/Dashboard.css';
import Lessons from '..';

function LearningDashboard() {
    return (
        <section className='user-dash container-fluid'>
            <div className='row p-3'>
                <div className="col-12">
                    <h2 className='dashboard_heading'>
                        Well done, Jadesola
                    </h2>
                    <p>
                       A new course has been added to your learning. If you encounter any problem, don't hesitate to contact us.
                    </p>
                </div>

                <div className="col-4 input-group align-self-end ms-auto w-25">
                    <button className='input-group-append btn btn-outline-secondary'><i className='fa-solid fa-search '></i></button>
                    <input type="text" className="form-control" placeholder="Search Courses" aria-label="Search Courses" aria-describedby="buttons"/>
                </div>
            </div>

            <div className='row p-4'>
                <div className='col-4 col-lg-4 col-md-6 col-sm-6 p-0'>
                    <img alt='woman smiling' src='https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21hbiUyMHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='img-fluid'></img>
                </div>

                <div className='col-8 col-lg-8 col-md-6 col-sm-6 user-info rounded-end'>
                    <p className='heart-icon text-end'>
                        <i className="fa-regular fa-heart"></i>
                    </p>
                    <h3>Charles Lukman</h3>
                    <p className='text-muted'>Linguistic Expert</p>

                    <h2 className='fw-bold mt-3 mb-3'>Understanding Alphabets in Igbo Language</h2>
                    <div className='progress'>
                        <div className="progress-bar w-25" id='buttons' role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
                    <p>Overall Progress</p>
                    <button className='btn btn-success' id='buttons'>Continue</button>
                </div>
            </div>
            <Lessons/>
        </section>
    )
}
export default LearningDashboard;