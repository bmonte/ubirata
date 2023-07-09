import { Routes, Route } from 'react-router-dom';

import { About, Map } from '@/pages';

export function RoutesComponent() {
  return (
    <Routes>
      {/* Mapa */}
      <Route path="/" element={<Map />} />

      {/* Sobre */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
