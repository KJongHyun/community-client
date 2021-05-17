import React from 'react';
import './PostCard.css';
import PostSideInfo from './PostSideInfo';

const PostCard = ({ title, contents }) => {
  return (
    <div className='PostCard'>
      <PostSideInfo />
      <div className='summary'>
        <h3>{title}</h3>
        <div>{contents}</div>
      </div>
    </div>
  );
};

export default PostCard;
