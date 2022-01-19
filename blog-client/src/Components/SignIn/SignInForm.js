import React from 'react';
import { Button, Box, TextField } from '@mui/material';
import palette from '../../Styles/palette';

const SignInForm = () => {
  const loginHandler = () => {
    window.location.href = '/main';
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
        />
        <TextField
          id="standard-basic"
          label="비밀번호"
          variant="standard"
          margin="normal"
        />
        <Button
          variant="contained"
          style={{
            marginTop: '30px',
            marginBottom: '20px',
            backGroundColor: `${palette.cyan[5]}`,
          }}
          onClick={() => loginHandler()}
        >
          로그인
        </Button>
        <Button variant="text">회원가입</Button>
      </Box>
    </div>
  );
};

export default SignInForm;
