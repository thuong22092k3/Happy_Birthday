import React from 'react';
import MainComponent from '../components/MainComponent/mainComponent';
import Helmet from '../components/Helmet';

const MainPage = () => {
  return (
    <Helmet title="Happy Birthday">
      <MainComponent />
    </Helmet>
  );
};

export default MainPage;
