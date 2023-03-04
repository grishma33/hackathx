import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navbar/Navigation';
import Notfound from './components/NotFound/NotFound';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Explore from './pages/Explore';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='' element={<Navigation />}>
          {/* <Route index path='' element={<Login />} /> */}
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='' element={<Home />} />
          <Route path='' element={<Footer />} />
          <Route path='explore' element={<Explore />} />
          <Route path='aboutus' element={<AboutUs  />} />

        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
