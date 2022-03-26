import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import palette from '../../Styles/palette';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookie, removeCookie] = useCookies(['access_token']);
  const [user, setUser] = useState();

  const logoutClickHandler = () => {
    removeCookie('access_token');
    window.location.href = '/';
  };

  const res = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/auth/token`, {
      headers: {
        Authorization: `Bearer ${cookie.access_token}`,
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setUser(json);
      });
  };

  useEffect(() => {
    if (cookie.access_token === 'undefined') {
      res();
    }
  }, [cookie]);

  return (
    <div
      style={{
        width: '100%',
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
        <Button
          variant="contained"
          style={{ backgroundColor: `${palette.cyan[6]}` }}
          onClick={() => logoutClickHandler()}
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
};
export default Header;
