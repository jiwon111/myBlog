import React, { useState } from 'react';
import Editor from '../Components/Write/Editor';
import Header from '../Components/Header';
import TagBox from '../Components/Write/TagBox';
import PostActionButtons from '../Components/Write/PostActionButtons';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState([]);
  return (
    <div>
      <Header />
      <Editor setTitle={setTitle} setContent={setContent} />
      <TagBox setTagList={setTagList} />
      <PostActionButtons title={title} content={content} tagList={tagList} />
    </div>
  );
};
export default WritePage;
