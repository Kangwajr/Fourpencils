import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPages";
import TeamPage from "./pages/TeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OurGalleryPage from "./pages/OurGalleryPage"
import Animation2D from "./pages/Animation2D";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Gallery" element={<OurGalleryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/2d-animation" element={<Animation2D />} />
      </Routes>
    </Router>
  );
};
export default App;
