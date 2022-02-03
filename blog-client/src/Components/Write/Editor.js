import React, { useState } from 'react';
import Title from './Title';
import Content from './Content';

const Editor = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const getTitle = () => {
    return props.setTitle(title);
  };
  const getContent = () => {
    return props.setContent(content);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '5rem' }}>
      <Title setTitle={setTitle} />
      <Content setContent={setContent} />
      {getTitle()}
      {getContent()}
    </div>
  );
};

export default Editor;
