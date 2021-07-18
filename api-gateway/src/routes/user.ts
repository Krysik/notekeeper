import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router
  .get('/:id', userController.getUser)
  .post('/', userController.createUser)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser);

export default router;
