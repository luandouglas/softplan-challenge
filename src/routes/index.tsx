import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages';

export const Router = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};
