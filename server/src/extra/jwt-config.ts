import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStatic } from 'passport';
import User from '../models/User';

let options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'tumama'
};
let strategyConfig = (passport: PassportStatic) => {
    passport.use(new Strategy(options, (jwt_payload, done)=> {
        User.findOne({clientNumber: jwt_payload.clientNumber}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}
export {options, strategyConfig}