import React from 'react';
import Header from '../Components/Header';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { Button } from '@mui/material';
import palette from '../Styles/palette';

const PostListPage = () => {
  const clickHandler = () => {
    window.location.href = '/write';
  };
  return (
    <>
      <Header />
      <Button
        variant="contained"
        startIcon={<AddBoxTwoToneIcon />}
        onClick={clickHandler}
        style={{ backgroundColor: `${palette.gray[6]}` }}
      >
        새 글 작성하기
      </Button>
    </>
  );
};
export default PostListPage;
