import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SuiteGalleryPage from './pages/SuiteGalleryPage';
import CareersPage from './pages/CareersPage';
import TouristPlacesPage from './pages/TouristPlacesPage';
import ShuttlePage from './pages/ShuttlePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/suite/:id" element={<SuiteGalleryPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/tourist-places" element={<TouristPlacesPage />} />
      <Route path="/shuttle" element={<ShuttlePage />} />
    </Routes>
  );
}
