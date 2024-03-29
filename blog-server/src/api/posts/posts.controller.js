const express = require('express');
const Post = require('../../../models/post');

const router = express.Router();

//포스트 조회
router.get('/', async (req, res, next) => {
  try {
    const post = await Post.findAll();
    res.json(post);
  } catch (err) {
    next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
});
//포스트 작성
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      body: req.body.body,
      created_date: req.body.created_date,
      tags: req.body.tags,
    });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

//특정 포스트 수정
router.put('/:id', async (req, res, next) => {
  try {
    // const post = await Post.create({
    //   title: req.body.title,
    //   body: req.body.body,
    //   created_date: req.body.created_date,
    //   tags: req.body.tags,
    // });
    const post = await Post.update(
      {
        title: req.body.title,
        body: req.body.body,
        created_date: req.body.created_date,
        tags: req.body.tags,
      },
      { where: { id: req.params.id } },
    );
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
