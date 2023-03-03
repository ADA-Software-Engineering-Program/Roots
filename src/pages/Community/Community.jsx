import React from "react"; 
import "./Community.css"; 
import commimage from "../../assets/rootcommunityimg.png";
import commimage0 from "../../assets/communityimg.png";
import commimage1 from "../../assets/communityimg1.png";
import commimage2 from "../../assets/communityimg2.png";
import commimage3 from "../../assets/communityimg3.png";
import commimage4 from "../../assets/communityimg4.png";

const Community = () => {
    return (
    <div className="community">

      <div className="mainsection">
          <div className="row mainpage">

            <div className="maintext col-md-6">
                <h1 className="mb-3 mainheading">Join the Roots Community</h1>
                <div className="mainsubsection mt-4">
                <p className="mainsubheading"><i class="fa-thin fa-users-line mainsubheadingicon"></i>50 Members</p>
                <p className="mainsubheading"><i class="fa-solid fa-message-lines mainsubheadingicon"></i>194 Posts</p>
                <p className="mainsubheading"><i class="fa-solid fa-signal-stream mainsubheadingicon"></i>34 In a discussion </p>
                </div>
               
                <div className="mainbutton">   
                  <button className="btn btn-success d-block mt-3" id="buttons">Join the conversation</button>
                </div>

            </div>
            
            <div className="col-md-6 mainimg">
              <img src={commimage} className="img-fluid" />
            </div>

          </div>
      </div> 

      <div className="joincommunity">

       <div className="row">

          <div className="col-lg-6 communitycard">
            <div className="innercard">
                <img src={commimage0}  className="communitycardimg img-fluid"/>
                <di >
                <p className="cardtext mt-4">Ask the community</p>
                <p>67 posts</p>
                </di>
            </div>
          </div>
          
          <div className="col-lg-6 communitycard">
            <div className="innercard">
                <img src={commimage1}  className="communitycardimg img-fluid"/>
                <div>
                <p className="cardtext mt-4">Interact with community members</p>
                <p>58 posts</p>
                </div>
            </div>
          </div>

          <div className="col-lg-6 communitycard">
            <div className="innercard">
                <img src={commimage2}  className="communitycardimg img-fluid"/>
                <div>
                <p className="cardtext mt-4">Join community conversations</p>
                <p>29 posts</p>
                </div>
            </div>
          </div>

          <div className="col-lg-6 communitycard">
            <div className="innercard">
                <img src={commimage3}  className="communitycardimg img-fluid"/>
                <div>
                <p className="cardtext mt-4">Participate in community challenges</p>
                <p>40 posts</p>
                </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Discussions */}

      <div className="discussions">
    
        <div>
            <h4 className="discussionheading mb-5">Latest discussions</h4>
        </div>

        <div className="">
            <h5 className="question mb-3">Why can’t I pronounce some Igbo words correctly?</h5>
            <p className="answer mb-3">Hey there! Have you ever been frustrated when trying to pronounce certain words in Igbo? I know I have! Are you curious to know why you can't seem to pronounce some Igbo words correctly? Here’s the simple reason why...</p>
        </div>

        <hr />

        <div className="">
            <h5 className="question mb-3">My experience speaking Igbo with other people for the first time</h5>
            <p className="answer mb-3">Hi there! I'm excited to share with you all about my experience speaking Igbo with other people for the first time. It was a really amazing experience and I'm looking forward to telling you all about it! This is how it started...</p>
        </div>

        <hr />

        <div className="">
            <h5 className="question mb-3">Fun activities to help integrate newly learned Igbo language skills into everyday life</h5>
            <p className="answer mb-3">It's great to interact with everyone here today! I'm excited to tell you about some fun activities that can help you integrate your newly learned Igbo language skills into everyday life. Are you ready to hear them?...</p>
        </div>

        <hr />

      </div>
      {/* Discussions */}

      {/* More from the community */}

      <div className="morecommunity">

            <div>
                <h4 className="morecommunityheading mb-5">More from the community</h4>
            </div>

        <div className="innermorecommunity">

            <div>
                <img src={commimage1}  className="communitycardimg img-fluid"/>
                <p className="cardtext mt-3 mb-5">Community events</p>
            </div>

            <div>
                <img src={commimage0}  className="communitycardimg img-fluid"/>
                <p className="cardtext mt-3 mb-5">Photos</p>
            </div>
            
            <div>
                <img src={commimage2}  className="communitycardimg img-fluid"/>
                <p className="cardtext mt-3 mb-5">Free resources</p>
            </div>
        </div>

      </div>
    
    </div>

    )
}

export default Community;