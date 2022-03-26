import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '../Components/Write/Editor';
import Header from '../Components/Header';
import TagBox from '../Components/Write/TagBox';
import PostActionButtons from '../Components/Write/PostActionButtons';

const WritePage = () => {
  const id = useParams().id; //수정할 포스트 id
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState([]);
  const [post, setPost] = useState();

  return (
    <div>
      <Header />
      <Editor setTitle={setTitle} setContent={setContent} id={id} />
      <TagBox setTagList={setTagList} />
      <PostActionButtons
        title={title}
        content={content}
        tagList={tagList}
        id={id}
      />
    </div>
  );
};
export default WritePage;
