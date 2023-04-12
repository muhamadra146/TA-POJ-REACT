import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Discovery from './pages/discovery';
import Destination from './pages/destination';
import Package from './pages/package';
import About from './pages/about';
import Destinationdetail from './pages/Destinationtrip'
import Opentripdetail from './pages/Opentripdetail';
import Privatetripdetail from './pages/Privatetripdetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/discovery' Component={Discovery}/>
        <Route path='/destination' Component={Destination}/>
        <Route path='/package' Component={Package}/>
        <Route path='/about-us' Component={About}/>
        <Route path='/destinationdetail' element={<Destinationdetail/>}/>
        <Route path='/opentripdetail' element={<Opentripdetail/>}/>
        <Route path='/privatetripdetail' element={<Privatetripdetail/>}/>
      </Routes>
    </div>
  );
}
export default App;
