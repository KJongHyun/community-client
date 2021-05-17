import React from 'react';
import { Header } from '..';

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate;
