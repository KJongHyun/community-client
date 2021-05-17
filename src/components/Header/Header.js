import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Logo'>
        <h2>BlahBlah Community</h2>
      </div>
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
