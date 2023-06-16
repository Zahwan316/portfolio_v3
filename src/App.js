import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './component/home';
import AboutPage from './component/about';
import SkillPage from './component/skill';
import ProjectPage from './component/project';
import ContactPage from './component/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/skill" element={<SkillPage />}/>
        <Route path="/project" element={<ProjectPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
