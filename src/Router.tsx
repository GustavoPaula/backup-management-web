import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth } from './pages/Auth';
import Home from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
