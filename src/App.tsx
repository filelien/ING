import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import EntitiesPage from './pages/EntitiesPage';
import PolesPage from './pages/PolesPage';
import SynergyPage from './pages/SynergyPage';
import StructurePage from './pages/StructurePage';
import InstitutionalPage from './pages/InstitutionalPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PoleDetailPage from './pages/PoleDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groupe" element={<GroupPage />} />
        <Route path="/entites" element={<EntitiesPage />} />
        <Route path="/poles" element={<PolesPage />} />
        <Route path="/poles/:slug" element={<PoleDetailPage />} />
        <Route path="/synergie" element={<SynergyPage />} />
        <Route path="/structure" element={<StructurePage />} />
        <Route path="/institutionnel" element={<InstitutionalPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
