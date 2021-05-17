import { Button, TextField } from '@material-ui/core';
import React from 'react';
import './PostFormWrapper.css';

const PostFormWrapper = ({
  post,
  titleOnChange,
  contentsOnChange,
  onEnrollClick,
}) => {
  return (
    <div className='PostFormWrapper'>
      <h3>PostFormWrapper</h3>
      <div className='Title'>
        <TextField
          name='title'
          placeholder='title'
          fullWidth
          variant='standard'
          value={post.title}
          onChange={titleOnChange}
        />
      </div>
      <div className='Contents'>
        <TextField
          name='contents'
          placeholder='contents'
          multiline
          rows='20'
          fullWidth
          variant='outlined'
          value={post.contents}
          onChange={contentsOnChange}
        />
      </div>
      <Button variant='contained' color='primary' onClick={onEnrollClick}>
        등록
      </Button>
    </div>
  );
};

export default PostFormWrapper;
