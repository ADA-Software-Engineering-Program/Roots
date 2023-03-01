import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/User dashboard/UserDashboard';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='container-fluid'>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default App
