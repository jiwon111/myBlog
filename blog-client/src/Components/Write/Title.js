import React, { useState } from 'react';
import { Input } from '@mui/material';

const Title = props => {
  const changeHandler = e => {
    props.setTitle(e.target.value);
  };
  return (
    <>
      <Input
        placeholder="제목을 입력하세요."
        onChange={changeHandler}
        style={{ fontSize: '2.5em', marginBottom: '2vh' }}
      />
    </>
  );
};
export default Title;
