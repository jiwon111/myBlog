import React, { useCallback, useState } from 'react';
import { Input, Button } from '@mui/material';
import palette from '../../Styles/palette';

const TagBox = props => {
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);

  const inputTag = useCallback(e => {
    setTag(e.target.value);
  });
  const clickHandler = () => {
    if (tag.length > 0) {
      setTagList([...tagList, tag]);
      props.setTagList([...tagList, tag]);
      setTag('');
    } else return;
  };
  return (
    <div style={{ height: '6vh' }}>
      <span
        style={{
          color: `${palette.gray[8]}`,
          marginBottom: '0.5rem',
          fontWeight: 'bold',
        }}
      >
        태그
      </span>
      <br></br>
      <Input placeholder="태그를 입력하세요" onChange={inputTag} value={tag} />
      <Button
        variant="contained"
        style={{ backgroundColor: `${palette.gray[9]}` }}
        onClick={clickHandler}
      >
        추가
      </Button>
      <br></br>
      {tagList &&
        tagList.map((tag, idx) => {
          return (
            <Button key={idx} style={{ color: `${palette.gray[6]}` }}>
              #{tag}
            </Button>
          );
        })}
    </div>
  );
};
export default TagBox;
