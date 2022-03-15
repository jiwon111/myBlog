const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const { sequelize } = require('../models');
const api = require('./api');

dotenv.config();

const app = new express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터 베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });
app.use(
  cors({
    credentials: true,
  }),
);
app.use(morgan('dev'));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', api); //api 라우트 적용(/api/test)

app.listen(5000, () => {
  console.log('5000번 포트에서 대기 중');
});
