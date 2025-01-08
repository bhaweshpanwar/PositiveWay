// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // assuming Home is another component where the button exists
import Form from './Form'; // the Form component you want to navigate to
import AboutUs from './AboutUs';
import Services from './ServiceCard';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Route to Home */}
        <Route path='/form' element={<Form />} /> {/* Route to Form */}
        <Route path='/AboutUs' element={<AboutUs />} /> {/* Route to Form */}
        <Route path='/Services' element={<Services />} /> {/* Route to Form */}
      </Routes>
    </Router>
  );
}

export default App;
