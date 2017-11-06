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
        this.router.get('/getuser', this.getUser);
        this.router.post('/login', this.login);
        this.router.get('/logout', this.logout);
    }
    createUser(req: Request, res: Response): void {
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
    login(req: Request, res: Response) {
        let { email, password } = req.body as __CustomTypes.loginRequest;
        User.findOne({email}).exec((err, user: __CustomTypes.User) => {
            if (err) {
                res.send(err);
            } else if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found'});
            } else {
                if (user.comparePasswords(password, user.password)) {
                    res.cookie('token', JWTStrategy.getToken(user.getPlainUser(user)).slice(4));
                    res.json({success: true, message: 'You are now logged in'});
                } else {
                    res.send({success: false, message: 'Authentication failed. Passwords did not match'});
                }
            }
        });
    }
    getUser(req: Request, res: Response) {
        if (req.cookies && req.cookies.token) {
            res.send({
                success: true, 
                data: JWTStrategy.getUser(req.cookies.token)
            });
        } else {
            res.send({success: false, data: null});
        }
    }
    logout(req: Request, res: Response) {
        if (req.cookies && req.cookies.token) {
            res.clearCookie('token');
            res.send({success: true, message: 'Successfully logged out'});
        } else {
            res.send({success: false, message: 'You are not logged in '});
        }
    }
    updateUser(req: Request, res: Response) {
    }
    deleteUser(req: Request, res: Response) {
    }
}

export default  new UserRouter().router;