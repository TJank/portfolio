import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

import ContactScreen from './screens/HomeScreens/ContactScreen';
import LandingScreen from './screens/HomeScreens/LandingScreen';
import ServicesScreen from './screens/HomeScreens/ServicesScreen';
import AboutScreen from './screens/HomeScreens/AboutScreen';



function App() {
  return (
    <Router>
      <Header />

      <main>
          <Routes>
            <Route exact path='/' element={<LandingScreen />} />
            <Route path='/services' element={<ServicesScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
          </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
