import { Router, Request, Response, NextFunction } from 'express';
import JWTStrategy from '../auth/jwt-auth';
import User from '../models/User';

class UserRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes(): void {
        this.router.post('/register', this.createUser);
        this.router.post('/login', this.login);
    }
    public createUser(req: Request, res: Response): void {
        console.log('request made = ', req.body);
        let {name, email, password } = req.body as __CustomTypes.newUser;
        let createdAt = new Date();
        new User({ name, email, password, createdAt, updatedAt: createdAt})
        .save((err, user) => {
            let data = err ? err : user;
            let status = res.statusCode;
            if (err) {
                console.error(err);
            }
            res.send({status, data});
        });
    }
    public login(req: Request, res: Response) {
        let { email, password } = req.body as __CustomTypes.loginRequest;
        User.findOne({email}).exec((err, user: __CustomTypes.User) => {
            if (err) {
                res.send(err);
            } else if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found'});
            } else {
                if (user.comparePasswords(password, user.password)) {
                    res.json({success: true, token: JWTStrategy.getToken(user)});
                } else {
                    res.send({success: false, message: 'Authentication failed. Passwords did not match'});
                }
            }
        });
    }
    public updateUser(req: Request, res: Response) {
    }
    public deleteUser(req: Request, res: Response) {
    }
}

export default  new UserRouter().router;