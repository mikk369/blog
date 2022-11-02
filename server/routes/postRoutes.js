const express = require('express');
const router = express.Router();
const postApi = require('../controllers/postApi');
const multer = require('multer');
const authController = require('./../controllers/authController');

// // multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single('image');

router.route('/').get(postApi.getAllPosts).post(upload, postApi.createPost);

router
  .route('/:id')
  .get(postApi.getPostById)
  .patch(upload, postApi.updatePost)
  .delete(postApi.deletePost);

module.exports = router;
