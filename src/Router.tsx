import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Private } from './components/auth/Private'
import { Dashboard } from './pages/Dashboard'

import Home from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Private />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
