const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { getUserById, updateUserById } = require('../model/users');

router.get('/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id);
  res.render('users', {user: user});
});

router.post('/', upload.none(), async (req, res, next) => {
  await updateUserById(req.body)
  console.log(req.body);
  res.send('ok')
});

module.exports = router;