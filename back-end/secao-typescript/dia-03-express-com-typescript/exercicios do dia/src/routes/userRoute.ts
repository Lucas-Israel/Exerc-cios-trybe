import {Router} from 'express';

import * as userController from '../controllers/user.controller';

import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/login', userController.postUser);

router.use(userMiddleware);

export default router;