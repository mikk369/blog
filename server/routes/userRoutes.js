const express = require('express');
const router = express.Router();
const userApi = require('../controllers/userApi');
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);

router.route('/').get(userApi.getAllUsers).post(userApi.createUser);

router
  .route('/:id')
  .get(userApi.getUser)
  .patch(userApi.updateUser)
  .delete(userApi.deleteUser);

module.exports = router;
