import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import Logo from '../Base/Logo';

const Header = () => {
  return (
    <div className='Header'>
      <Logo />
      <div className='Right-Item'>
        <div className='Login-Button'>
          <Button variant='contained' color='primary'>
            로그인
          </Button>
        </div>
        <div className='Signup-Button'>
          <Button className='Signup-Button' variant='contained' color='primary'>
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
