import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../Styles/palette';
import PostViewerButtons from '../Post/PostViewerButtons';

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
`;

const Tags = styled.div`
  margin-top: 0.5rem;
`;
const PostContent = styled.div``;

const PostViewer = postId => {
  const [post, setPost] = useState();
  const id = postId.postId;
  const getPostItem = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/posts/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setPost(json);
      });
  };

  useEffect(() => {
    getPostItem();
  }, []);

  return (
    <>
      {post && (
        <PostViewerBlock>
          <PostHead>
            <h1>{post.title}</h1>
            <SubInfo></SubInfo>
            <Tags></Tags>
          </PostHead>
          <PostContent>{post.body}</PostContent>
          <PostViewerButtons postId={postId.postId} />
        </PostViewerBlock>
      )}
    </>
  );
};
export default PostViewer;
