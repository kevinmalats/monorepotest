import express from 'express';
import UserRouter from './User/router_user.js';

const router = express.Router();
const userRouter = new UserRouter();

router.use('/user', userRouter.router);


export default router;
