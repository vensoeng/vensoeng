import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from "./components/layout/header";
import Footer from './components/layout/footer';
//pages
import HomePage from './pages/home'; 
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/signup';
import AboutPage from './pages/about';
import CreatorPage from './pages/creator';
import EducationPage from './pages/education';
import PosterPage from './pages/poster';
import WebsitePage from './pages/website';
import './App.css';

function RoutePage()
{
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/creator' element={<CreatorPage/>}></Route>
      <Route path='/education' element={<EducationPage/>}></Route>
      <Route path='/education' element={<EducationPage/>}></Route>
      <Route path='/poster' element={<PosterPage/>}></Route>
      <Route path='/website' element={<WebsitePage/>}></Route>
    </Routes>
  )
}
function App() {
  return (
    <Router>
      <Header />
      <RoutePage />
      <Footer/>
    </Router>
  );
}

export default App;
