import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import Dashboard from './pages/User dashboard/UserDashboard';
import Tutor from './pages/Tutor profile/TutorProfile';
// import Community from './pages/Community/Community';
// import Help from './pages/Help/Help';

const App = ()  => {
  // const [count, setCount] = useState(0)
  return (
    <div className='container-fluid'>
      <Navbar/>
      <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tutor" element={<Tutor />} />
            {/* <Route path="/community" element={<Community />} />
            <Route path='/help' element={<Help/>} /> */}
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
