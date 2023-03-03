import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import Dashboard from './pages/User/Dashboard';
import Tutor from './pages/Tutor/Profile';
import Community from './pages/Community/Community';
import UserProfile from './pages/User/Profile/UserSettings'
import Course from './pages/Lessons/Learning/Screen'
// import Help from './pages/Help/Help';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='container-fluid'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/community" element={<Community />} />
          <Route path='/settings' element={<UserProfile />} />
          <Route path='/course' element={<Course/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
