import { Button, TextField } from '@material-ui/core';
import React from 'react';
import Logo from '../Base/Logo';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='LoginForm'>
      <div className=''>
        <Logo />
        <div>
          <TextField variant='filled' label='id' />
        </div>
        <div>
          <TextField variant='filled' label='password' />
        </div>
        <div className='LoginButton'>
          <Button variant='contained' color='primary'>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
