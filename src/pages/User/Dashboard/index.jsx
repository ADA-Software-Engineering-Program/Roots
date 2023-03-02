import React from 'react';
import './Dashboard.css';
import Lessons from '../../Lessons';

function UserDashboard() {
    return(
        <section className='container-fluid dashboard p-0'>
            <div className='row justify-content-between p-3'>
                <div className="col-12">
                    <h2 className='dashboard_heading'>
                        Hello, Jadesola
                    </h2>
                    <p>
                        Welcome to <strong>Roots.</strong> Explore our level of courses to get started.
                    </p>
                </div>

                <div className="col-4 input-group align-self-end ms-auto w-25">
                    <button className='input-group-append btn btn-outline-secondary'><i className='fa-solid fa-search '></i></button>
                    <input type="text" className="form-control" placeholder="Search Courses" aria-label="Search Courses" aria-describedby="buttons"/>
                </div>
            </div>
            <Lessons/>
        </section>
    )
}

export default UserDashboard;