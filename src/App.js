// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import GasSensorData from './components/GasSensorData';
// import LandingPage from './components/LandingPage';
// import ControlAndVideo from './components/ControlAndVideo';
// import GPSData from './components/GPSData';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/gas-sensors" element={<GasSensorData />} />
//         <Route path='/control-video' element={<ControlAndVideo />}/>
//         <Route path='gps' element={<GPSData />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GasSensorData from './components/GasSensorData';
import LandingPage from './components/LandingPage';
import ControlAndVideo from './components/ControlAndVideo';
import GPSData from './components/GPSData';
import { GPSProvider } from './components/GPSContext';

const App = () => {
  return (
    <GPSProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gas-sensors" element={<GasSensorData />} />
          <Route path='/control-video' element={<ControlAndVideo />} />
          <Route path='/gps' element={<GPSData />} />
        </Routes>
      </Router>
    </GPSProvider>
  );
};

export default App;
