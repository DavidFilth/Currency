import { Router, Request, Response, NextFunction } from 'express';
import { options } from '../extra/jwt-config';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';

class UserRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    public createUser(req: Request, res: Response): void {
        let {name, email, password, adress, phone } = req.body as __CustomTypes.newUser;
        let createdAt = new Date();
        let newUser = new User({ name, email, password, adress, phone, createdAt,
            updatedAt: createdAt,
            clientNumber: 10
        }).save((err, user) => {
            let data = err ? err : user;
            let status = res.statusCode;
            if (err) {
                console.error(err);
            }
            res.send({status, data});
        });
    }
    public login(req: Request, res: Response) {
        let { clientNumber, password } = req.body as __CustomTypes.loginRequest; 
        User.findOne({clientNumber}).exec((err, user: __CustomTypes.User) => {
            if (err) {
                res.send(err);
            } else if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found'});
            } else {
                if (user.comparePasswords(password, user.password)) {
                    let token = jwt.sign(user, options.secretOrKey, {expiresIn: 300});
                    res.json({success: true, token: 'JWT ' + token});
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
    public routes(): void {
        this.router.post('/register', this.createUser);
        this.router.post('/login', this.login);
    }
}

export default  new UserRouter().router;