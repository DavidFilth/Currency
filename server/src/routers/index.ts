import { Router, Request, Response, NextFunction } from 'express';
import { jwtAuthenticate } from '../auth';
import userRouter from './userRouter';

class mainRouter {
    public router : Router
    constructor() {
        this.router = Router();
        this.router.use('/api/v1/user', userRouter);
        this.routes();
    }
    routes(): void {
        this.router.get('/dashboard', jwtAuthenticate,this.dashboard);
    }
    private dashboard(req: Request, res: Response, next: NextFunction) {
        res.send({success: true, data: req.user});
    }
}

export default new mainRouter().router;