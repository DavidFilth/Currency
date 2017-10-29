import { FB_CLIENT_ID, FB_CLIENT_SECRET, callbackURL } from '../const';
import { JWT_SECRET } from '../const';
import { 
    Strategy,
    StrategyOptionWithRequest as StrategyOptions, 
    VerifyFunctionWithRequest as VerifyCallback
} from 'passport-facebook';

class FBStrategy {
    private options: StrategyOptions;
    constructor() {
        this.options = {
            clientID: FB_CLIENT_ID,
            clientSecret: FB_CLIENT_SECRET,
            passReqToCallback: true,
            callbackURL
        };
    }
    public createStrategy(cb: VerifyCallback) {
        return new Strategy(this.options, cb);
    }
}
export default FBStrategy;