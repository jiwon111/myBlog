const express = require('express');
const Post = require('../../../models/post');

const router = express.Router();

//포스트 작성
router.get('/', async (req, res, next) => {
  try {
    const post = await Post.findAll();
    res.json = post;
    console.log(res);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      body: req.body.body,
      created_date: req.body.created_date,
      tags: req.body.tags,
    });
    console.log(post);
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
