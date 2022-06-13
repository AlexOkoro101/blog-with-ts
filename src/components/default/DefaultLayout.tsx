import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import appRoutes from '../../routes';
import { RouteProp } from '../../types/models';
import Footer from './Footer';
import Navbar from './Navbar';

const DefaultLayout: React.FC = () => {
  const getRoutes = (routes: RouteProp[]) => {
    return routes.map((prop, key) => (
      <Route
        path={prop.path}
        element={prop.component}
        key={key}
      />
    ));
  };
  return (
    <Box>
      <Navbar />
        <Routes>
          {getRoutes(appRoutes)}
        </Routes>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
