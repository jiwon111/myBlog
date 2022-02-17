import React from 'react';
import { Button } from '@mui/material';
import palette from '../../Styles/palette';
const PostActionButtons = ({ title, content, tagList }) => {
  const writePost = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/posts`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: content,
          tags: null,
        }),
      },
    );

    if (response.status === 201) {
      alert('포스트가 등록되었습니다.');
      window.location.href = '/main';
    }
  };
  //등록
  const postClickHandler = () => {
    writePost();
  };
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
        onClick={title && content ? postClickHandler : null}
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
