import React, { useState, useEffect } from 'react';
import palette from '../../Styles/palette';
import styled from 'styled-components';

const PostListBlock = styled.div`
  margin-top: 3rem;
`;

const PostItemBlock = styled.div`
  /* padding-top: 3rem; */
  padding-bottom: 3rem;
  /* &:first-child {
    padding-top: 0;
  } */
  & {
    border-top: 1px solid ${palette.gray[2]};
  }
  &:hover {
    background-color: ${palette.gray[1]};
  }
`;

const SubInfo = styled.div`
  color: ${palette.gray[6]};
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const PostItem = () => {
  const [post, setPost] = useState([]);

  const getPostItem = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/posts`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setPost(json);
      });
  };
  console.log(post);
  useEffect(() => {
    getPostItem();
  }, []);
  return (
    <div>
      {post.map((p, key) => (
        <PostItemBlock>
          <h2>{p.title}</h2>
          <SubInfo>
            <p>
              <b>username</b>
            </p>
            <p>{p.created_date.slice(0, 10)}</p>
          </SubInfo>
          <Tags>
            <div className="tag">태그1</div>
            <div className="tag">태그2</div>
          </Tags>
        </PostItemBlock>
      ))}
    </div>
  );
};
const PostList = () => {
  return (
    <PostListBlock>
      <PostItem></PostItem>
    </PostListBlock>
  );
};
export default PostList;
