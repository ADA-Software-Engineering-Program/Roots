import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import { Tutor, UserDashboard, UserProfile, UserNotification, UserSecurity, Payment } from './pages';
import Community from './pages/Community/Community';
import Support from './pages/Support/Support';
import Course from './pages/Lessons/Learning/Screen'


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
          <Route path='/course' element={<Course/>}/>
          <Route path="/support" element={<Support />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/notification' element={<UserNotification />} />
          <Route path='/security' element={<UserSecurity />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
