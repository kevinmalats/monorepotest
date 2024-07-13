import express from 'express';
import UserRouter from './User/router_user.js';
import PersonRouter from './Person/router_person.js';
import AuthRouter from './Authentication/route_auth.js';

const router = express.Router();
const userRouter = new UserRouter();
const personRouter = new PersonRouter();
const authRouter = new AuthRouter();

router.use('/user', userRouter.router);
router.use('/person', personRouter.router);
router.use("/auth", authRouter.router)

export default router;
