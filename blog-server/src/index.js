const express = require('express');

const app = new express();

app.get('/', (req, res) => {
  res.send('홈');
});

app.get('/about', (req, res) => {
  res.send('소개');
});

app.listen(5000, () => {
  console.log('5000번 포트에서 대기 중');
});
