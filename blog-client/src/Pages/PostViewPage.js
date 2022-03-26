import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import palette from '../Styles/palette';
import PostViewer from '../Components/Post/PostViewer';

const PostViewPage = () => {
  const id = useParams().id;
  return (
    <>
      <Helmet>
        <title>포스트 조회</title>
      </Helmet>
      <Header />
      <PostViewer postId={id} />
    </>
  );
};
export default PostViewPage;
