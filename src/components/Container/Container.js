import React from 'react';
import { PostFormContainer, PostListContainer } from '../../containers';

import './Container.css';

const Container = () => {
  return (
    <div className='Container'>
      <h2>Container</h2>
      {/* <PostFormContainer /> */}
      <PostListContainer />
    </div>
  );
};

export default Container;
