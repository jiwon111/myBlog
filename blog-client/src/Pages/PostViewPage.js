import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import palette from '../Styles/palette';
import PostViewer from '../Components/Post/PostViewer';

const PostViewPage = () => {
  const id = useParams().id;
  return (
    <>
      <Header />
      <PostViewer postId={id} />
    </>
  );
};
export default PostViewPage;
