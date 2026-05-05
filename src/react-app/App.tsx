import { HashRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ProjectsPage from "@/react-app/pages/ProjectsPage";
import ProjectDetail from "@/react-app/pages/ProjectDetail";
import { useRevealObserver } from "@/react-app/hooks/useScrollReveal";

export default function App() {
  useRevealObserver();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
