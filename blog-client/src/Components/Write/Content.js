import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Content = props => {
  const changeHandler = e => {
    props.setContent(e.target.value);
  };
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        rows={15}
        placeholder="내용을 입력하세요."
        style={{ fontSize: '1.3em' }}
        onChange={changeHandler}
      />
    </>
  );
};
export default Content;
