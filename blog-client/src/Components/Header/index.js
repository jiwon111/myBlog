import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import palette from '../../Styles/palette';

const Header = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '10vh',
        backgroundColor: `${palette.gray[0]}`,
        boxShadow: '0 2 4 rgba(0, 0, 0, 0.8)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 'inherit',
          alignItems: 'center',
          marginLeft: '3vw',
          marginRight: '3vw',
        }}
      >
        <Link
          to="/main"
          style={{
            fontWeight: 'bold',
            fontSize: '1.8em',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          myBlog
        </Link>
        <Button variant="contained">로그인</Button>
      </div>
    </div>
  );
};
export default Header;
