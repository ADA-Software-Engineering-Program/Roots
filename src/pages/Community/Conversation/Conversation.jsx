import React from "react"; 
import "./Conversation.css"; 
import userimage from "../../../assets/profile-image.png"
import content from "../../../assets/content.png"

const Conversation  = () => {
    return (
    <div className="conversation">

            <form className="text-center">
            <div className="inputcontainer"> 
                <i className="fa-solid fa-magnifying-glass searchicon"></i>
                <input type="text" placeholder="Search for help"/>
            </div>
            </form>

          
        <div className="conversationdetails">

            <div className="userinfo">

                 <div>
                   <img src={userimage} alt="" className="userimg"/>
                 </div>

                 <div className="nameanddate">
                    <h4 className="username">Juliana Uchendu</h4>
                    <h5 className="date">March 13, 2023 at 1:30pm</h5>
                 </div>
               
            </div>

            <h2 className="question">Why can’t I pronounce some Igbo words correctly?</h2>
            <p className="ask">I’m not able to pronounce some of the word below correctly, what can I do?</p>

            <img src={content} alt="content" />
            
            <div className="userfeedbacks">
                    <div>
                        <p> 
                          <span className="like"><i class="fa-solid fa-thumbs-up usericon"></i> Like</span>
                          <span className="answer"><i class="fa-sharp fa-solid fa-comment usericon"></i> Answer</span>                       
                        </p>
                    </div>

                    <div>
                       <p> 
                          <span>15 answers</span>
                          <span><i class="fa-solid fa-period period"></i></span>
                          <span>15 views</span>                       
                        </p>
                    </div>
            </div>

            <hr />

                <div className="userinfo">

                 <div>
                   <img src={userimage} alt="" className="userimg"/>
                 </div>

                 <div className="nameanddate">
                    <h4 className="username">Juliana Uchendu</h4>
                    <h5 className="date">March 13, 2023 at 1:30pm</h5>
                 </div>
               
            </div>

            <h2 className="question">Why can’t I pronounce some Igbo words correctly?</h2>
            <p className="ask">I’m not able to pronounce some of the word below correctly, what can I do?</p>

            <img src={content} alt="content" />
            
            <div className="userfeedbacks">
                    <div>
                        <p> 
                          <span className="like"><i class="fa-solid fa-thumbs-up usericon"></i> Like</span>
                          <span className="answer"><i class="fa-sharp fa-solid fa-comment usericon"></i> Answer</span>                       
                        </p>
                    </div>

                    <div>
                       <p> 
                          <span>15 answers</span>
                          <span><i class="fa-solid fa-period period"></i></span>
                          <span>15 views</span>                       
                        </p>
                    </div>
            </div>

            <hr />

                 <div className="userinfo">

                 <div>
                   <img src={userimage} alt="" className="userimg"/>
                 </div>

                 <div className="nameanddate">
                    <h4 className="username">Juliana Uchendu</h4>
                    <h5 className="date">March 13, 2023 at 1:30pm</h5>
                 </div>
               
            </div>

            <h2 className="question">Why can’t I pronounce some Igbo words correctly?</h2>
            <p className="ask">I’m not able to pronounce some of the word below correctly, what can I do?</p>

            <img src={content} alt="content" />
            
            <div className="userfeedbacks">
                    <div>
                        <p> 
                          <span className="like"><i class="fa-solid fa-thumbs-up usericon"></i> Like</span>
                          <span className="answer"><i class="fa-sharp fa-solid fa-comment usericon"></i> Answer</span>                       
                        </p>
                    </div>

                    <div>
                       <p> 
                          <span>15 answers</span>
                          <span><i class="fa-solid fa-period period"></i></span>
                          <span>15 views</span>                       
                        </p>
                    </div>
            </div>

            <hr />

        </div>
    
    </div>

    )
}

export default Conversation;