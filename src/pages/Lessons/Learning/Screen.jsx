import React from 'react';
import video from "@/assets/videoo.png";
import profile from "@/assets/profile-image.png";
import './Screen.css';
import { Link } from 'react-router-dom';

const Course = () => {
    return(
        <div className='mt-5 p-5'>
            <div className="vect">
                <Link to ='/dashboard'>
                    <p>Home <i className="fa-solid fa-chevron-right"></i></p>
                </Link>
            
                <p>Basic level <i className="fa-solid fa-chevron-right"></i></p>

                <p>Alphabet</p>
            </div>

            <a href="https://youtu.be/pVGmhcYM4LU"><img src={video} alt="video" className='video'></img></a>
            <h1>Understanding Alphabetic in Igbo language </h1>

            <div className='profile'>
                <img src={profile} alt="profile"></img>
                <div>
                    <h2 className='profilename'> Charles Lukman</h2>
                    <p className='titles'> Linguistic Expert</p>
                </div>    
            </div>

            <div>
                <div>
                    <p><i className="fa-solid fa-volume-high"></i> Igbo language (Original)</p>
                    <p><i className="fa-regular fa-file-lines"></i> Subtitle (English language)</p>
                </div>
                
               <div> 
                    <p><i className="fa-regular fa-thumbs-up"></i> 93% (1k)</p>
                    <p><i className="fa-solid fa-person"></i> 75k students</p>
                </div>
            </div>
            <hr></hr>

            <div>
                <h3>Requirements</h3>
                <div className='requirements'>
                    <p><i className="fa-solid fa-play"></i> 1hr of video</p>
                    <p><i className="fa-solid fa-book-open"></i> 30 min of reading</p>
                    <p><i className="fa-regular fa-chess-rook"></i> 1 graded assignment</p>
                </div>
            </div>
            <hr/>

            <h3>Course Content</h3>
            <ul>
                <li> 
                    <p>No prior experience needed. If you are a Beginner or Intermediate learner, this course teaches you everything you need to know. Make use of the Video transcript, answers to exercises and the flashcards you will find in the resources section.
                    </p>
                </li>

                <li> 
                    <p>The Alphabetic Course provides ALL you need to master Speaking, Listening, Reading and Writing the Igbo Language. Beginning with a foundation lecture on the Igbo alphabets, it guides you through Tones and Vowel sounds to lay a foundation for your pronunciation, Greetings and Salutations as a basis for communication, Nouns to increase your vocabulary, and other Parts of speech to guarantee your progress from simple to complex sentence formation.
                    </p>
                </li>
            </ul>
            <hr/>

            <h3>Who is this Course for?</h3>
            <ul>
                <li>
                    <p>Learners of Igbo Language at Beginner and Intermediate level, with or without prior exposure to the Igbo Language</p>
                </li>
            </ul>

            <div className="modal fade" id="paymentNotification" tabIndex="-1" aria-labelledby="paymentNotificationLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="paymentNotificationLabel">Make Subscription</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-3">
                            Subscribe to our e-learning platform to gain access to millions of resources to aid your understanding of Nigeria Indigenous language (Igbo).
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            
                            <Link to='/subscription'>
                                <button type="button" className="btn btn-success" data-bs-dismiss='modal'>
                                    Subscribe
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#paymentNotification" id='buttons'>Get Started</button>
        </div>
    )
}

export default Course;