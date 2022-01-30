import { Routes, Route } from 'react-router-dom';
import { Country, Home } from 'pages';
import { Column, Header } from 'components';

export const Router = () => {
  return (
    <Column width="1200px" margin="0 auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:_id" element={<Country />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Column>
  );
};
