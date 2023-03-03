import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import { Tutor, UserDashboard, UserProfile, UserNotification, UserSecurity, Payment } from './pages';
// import Help from './pages/Help/Help';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='container-fluid'>
      <Navbar />
      <div className='components'>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/tutor" element={<Tutor />} />
          {/* <Route path="/community" element={<Community />} /> */}
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/notification' element={<UserNotification />} />
          <Route path='/security' element={<UserSecurity />} />
          <Route path='/payment' element={<Payment />} />
          {/* <Route path='/course' element={<Course/>}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
