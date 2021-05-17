import React from 'react';
import './PostSideInfo.css';

const PostSideInfo = () => {
  return (
    <div className='PostSideInfo'>
      <div className='Comments'>
        <span>
          <strong>0</strong>
        </span>
        <div>comments</div>
      </div>
      <div className='Views'>
        <div>0 views</div>
      </div>
    </div>
  );
};

export default PostSideInfo;
