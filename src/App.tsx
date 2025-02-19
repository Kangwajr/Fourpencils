import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import PortfolioPage from "./pages/Projects/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OurGalleryPage from "./pages/OurGalleryPage"
import Animation2D from "./pages/Animation";
import Illustrations from "./pages/Illustrations";
import ComicsStorybook from "./pages/Comics-storybooks";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/Gallery" element={<OurGalleryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/animation" element={<Animation2D />} />
        <Route path="/Illustrations" element={<Illustrations />} />
        <Route path="/comics-story-books" element={<ComicsStorybook />} />
      </Routes>
    </Router>
  );
};
export default App;
