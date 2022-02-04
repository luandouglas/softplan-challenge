import { Routes, Route } from 'react-router-dom';
import { Country, Home } from 'pages';
import { Column, Header } from 'components';
import { CountryEdit } from 'pages/CountryEdit';

export const Router = () => {
  return (
    <div>
      <Header />
      <Column width="100%" style={{ alignItems: 'center', paddingTop: 100 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:_id" element={<Country />} />
          <Route path="country/:_id/edit" element={<CountryEdit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Column>
    </div>
  );
};
