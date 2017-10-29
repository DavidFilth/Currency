import * as  passport from 'passport';
import FBStrategy from './facebook-auth';
import JWTStrategy from './jwt-auth';
import User from '../models/User';

let jwtAuthenticate = passport.authenticate('jwt', {session: false});
passport.use(JWTStrategy.createStrategy((jwt_payload, done)=> {
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

export {jwtAuthenticate};
export default passport.initialize();
