import { ExtractJwt, Strategy, StrategyOptions, VerifyCallback } from 'passport-jwt';
import { PassportStatic } from 'passport';
import { JWT_SECRET } from '../const';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';

class JWTStrategy {
    private options: StrategyOptions;
    constructor() {
        this.options = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
            secretOrKey: JWT_SECRET,
        };
    }
    public createStrategy(cb: VerifyCallback) {
        return new Strategy(this.options, cb);
    }
    public getToken(user: __CustomTypes.User) {
        return 'JWT ' + jwt.sign(user.getPlainUser(user), JWT_SECRET, {expiresIn: 300});
    }
}
export default new JWTStrategy();