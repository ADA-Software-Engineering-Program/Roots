import React from 'react';
import './Dashboard.css';
import Lessons from '../../Lessons';

function UserDashboard() {
    return(
        <section className='container-fluid p-0'>
            <div className='row justify-content-between p-3 dashboard'>
                <div className="col-12 dashboard-heading">
                    <h2 className='fw-bolder'>
                        Hello, 
                    </h2>
                    <p>
                        Welcome to <strong>Roots.</strong> Explore our level of courses to get started.
                    </p>
                </div>

                <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 input-group align-self-end ms-xl-auto ms-lg-auto ms-md-auto w-xl-25 w-lg-25 w-md-25">
                    <button className='input-group-append btn btn-outline-success border border-end-0' id='search-btn'><i className='fa-solid fa-search'></i></button>
                    <input type="text" className="form-control m-0 border border-start-0 p-0" placeholder="Search Courses" aria-label="Search Courses" aria-describedby="buttons" id='search-input'/>
                </div>
            </div>
            
            <Lessons/>
        </section>
    )
}

export default UserDashboard;