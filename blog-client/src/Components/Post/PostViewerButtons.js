import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../Styles/palette';

const PostViewerButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.div`
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray[1]};
    color: ${palette.gray[7]};
  }
  & + & {
    margin-left: 1rem;
  }
`;

const editHandler = id => {
  window.location.href = `/write/${id}`;
};

const deleteHandler = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_BASE_URL}/api/posts/${id}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'DELETE',
    },
  );

  if (response.status === 200) {
    alert('포스트가 삭제되었습니다.');
    window.location.href = '/main';
  }
};

const PostViewerButtons = postId => {
  return (
    <PostViewerButtonsBlock>
      <ActionButton onClick={() => editHandler(postId.postId)}>
        수정
      </ActionButton>
      <ActionButton onClick={() => deleteHandler(postId.postId)}>
        삭제
      </ActionButton>
    </PostViewerButtonsBlock>
  );
};

export default PostViewerButtons;
