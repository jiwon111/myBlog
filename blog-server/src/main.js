require('dotenv').config();
import express from 'express';
import { sequelize } from '../models';
const { PORT } = process.env;

import api from './api';

const app = new express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터 베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send('홈');
});

app.get('/about/:name?', (req, res) => {
  const { name } = req.params;
  res.send(name ? `${name}의 소개` : '소개');
});

app.get('/posts', (req, res) => {
  const { id } = req.query;
  res.send(id ? `포스트 #${id}` : '포스트 아이디가 없습니다.');
});

app.use('/api', api); //api 라우트 적용(/api/test)

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 대기 중`);
});
