import React from 'react';
import { Button } from '@mui/material';
import palette from '../../Styles/palette';

const PostActionButtons = ({ title, content, tagList }) => {
  //취소
  const cancelClick = () => {
    window.location.href = '/main';
  };
  return (
    <div style={{ paddingTop: '4rem' }}>
      <Button
        variant="contained"
        style={{
          backgroundColor: `${palette.cyan[5]}`,
          color: 'white',
          marginRight: '1rem',
        }}
      >
        포스트 등록
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: `${palette.gray[9]}`, color: 'white' }}
        onClick={cancelClick}
      >
        취소
      </Button>
    </div>
  );
};
export default PostActionButtons;
