import React from 'react';
import Header from '../Components/Header';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { Button } from '@mui/material';

const PostListPage = () => {
  return (
    <>
      <Header />
      <Button variant="contained" startIcon={<AddBoxTwoToneIcon />}>
        새 글 작성하기
      </Button>
    </>
  );
};
export default PostListPage;
