import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import { Tutor, UserDashboard, UserProfile, UserNotification, UserSecurity, Payment } from './pages';
import Community from './pages/Community/Communitypage/Community';
import Conversation from './pages/Community/Conversation/Conversation';
import Support from './pages/Support/Support';
import Content from './pages/Lessons/Learning/Course.jsx';
import Course from './pages/Lessons/Learning/Screen'
import LearningDashboard from './pages/Lessons/User/Dashboard.jsx';
import PaymentSuccess from './pages/Lessons/User/PaymentSuccess'

function App() {

  // const [count, setCount] = useState(0)
  return (
    <div className='container-fluid'>
      <Navbar />
      <div className='components'>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/community" element={<Community />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path='/course' element={<Course/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path="/support" element={<Support />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/notification' element={<UserNotification />} />
          <Route path='/security' element={<UserSecurity />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/dashboard' element={<LearningDashboard />} />
          <Route path='/success' element={<PaymentSuccess />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
