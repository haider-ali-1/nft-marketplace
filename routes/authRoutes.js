import express from 'express';
import { body } from 'express-validator';
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(body('name').escape(), registerUser);
router.route('/login').post(loginUser);
router.route('/forgot-password').post(forgotPassword);
router.route('/reset-password/:token').patch(resetPassword);

export default router;
