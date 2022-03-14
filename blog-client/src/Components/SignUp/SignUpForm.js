import React, { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import palette from '../../Styles/palette';

const SignUpForm = () => {
  const signUpHandler = () => {
    window.location.href = '/';
  };
  const loginHandler = () => {
    window.location.href = '/';
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const inputId = e => {
    setId(e.target.value);
    console.log(id);
  };
  const inputPw = e => {
    setPw(e.target.value);
    console.log(pw);
  };
  const inputConfirmPw = e => {
    setConfirmPw(e.target.value);
    console.log(confirmPw);
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
          height: 440,
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
          onChange={inputId}
          value={id}
        />
        <TextField
          id="standard-basic"
          label="비밀번호"
          variant="standard"
          margin="normal"
          type="password"
          onChange={inputPw}
          value={pw}
        />
        <TextField
          id="standard-basic"
          label="비밀번호 확인"
          variant="standard"
          margin="normal"
          type="password"
          onChange={inputConfirmPw}
          value={confirmPw}
        />
        <Button
          variant="contained"
          style={{
            marginTop: '30px',
            marginBottom: '20px',
            backgroundColor: `${palette.cyan[5]}`,
          }}
          onClick={() => signUpHandler()}
        >
          회원가입
        </Button>
        <Button variant="text" onClick={() => loginHandler()}>
          로그인
        </Button>
      </Box>
    </div>
  );
};

export default SignUpForm;
