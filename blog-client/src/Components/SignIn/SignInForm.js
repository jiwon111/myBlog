import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Button, Box, TextField } from '@mui/material';
import palette from '../../Styles/palette';

const SignInForm = () => {
  const [cookie, setCookie] = useCookies(['access_token']);

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const inputId = e => {
    setId(e.target.value);
  };

  const inputPw = e => {
    setPw(e.target.value);
  };

  const getAuth = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/auth/token`,
      {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${cookie.access_token}`,
        },
        method: 'GET',
      },
    );

    const data = await response.json();

    if (data.status === 203) {
      window.location.href = '/main';
    } else {
      alert('로그인 실패');
    }
  };

  useEffect(() => {
    if (cookie.access_token !== 'undefined') getAuth();
  }, [cookie]);

  const loginHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/auth/login`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          userId: id,
          hashedPassword: pw,
        }),
      },
    );
    const responseData = await response.json();

    if (response.status === 200) {
      setCookie('access_token', responseData.token);
      // window.location.href = '/main';
    } else if (response.status === 401) {
      alert('아이디나 비밀번호가 일치하지 않습니다.');
      setId('');
      setPw('');
    } else {
      alert('로그인 실패');
    }
  };

  const signUpHandler = () => {
    window.location.href = '/sign-up';
  };

  return (
    <div
      style={{
        backgroundColor: `${palette.gray[2]}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 360,
          height: 360,
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.025)',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '80px',
          paddingRight: '80px',
        }}
      >
        <p
          style={{
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: `${palette.gray[7]}`,
          }}
        >
          myBlog
        </p>
        <TextField
          id="standard-basic"
          label="아이디"
          variant="standard"
          margin="normal"
          value={id}
          onChange={inputId}
        />
        <TextField
          id="standard-basic"
          label="비밀번호"
          type="password"
          variant="standard"
          margin="normal"
          value={pw}
          onChange={inputPw}
        />
        <Button
          variant="contained"
          style={{
            marginTop: '30px',
            marginBottom: '20px',
            backgroundColor: `${palette.cyan[5]}`,
          }}
          onClick={() => loginHandler()}
        >
          로그인
        </Button>
        <Button variant="text" onClick={() => signUpHandler()}>
          회원가입
        </Button>
      </Box>
    </div>
  );
};

export default SignInForm;
