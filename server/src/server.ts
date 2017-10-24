import { strategyConfig } from './extra/jwt-config';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';


// import Routers
import userRouter from './routers/userRouter';

// import Models
import User from './models/User';
// Server class
class Server {
    public app : express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    public config(): void{
        // Set up mongoose
        const MONGO_URI = 'mongodb://localhost/Currency';
        mongoose.connect( MONGO_URI || process.env.MONGODB_URI, {
            useMongoClient: true
        }, (err) => {
            if(err){
                console.error(err);
            } else{
                console.log('Successfully connected to ', MONGO_URI);
            }
        });

        // Initial configuration
        this.app.use(bodyParser.urlencoded({ extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        // Passport set up
        this.app.use(passport.initialize());
        strategyConfig(passport);

        
    }
    public routes(): void {
        let router: express.Router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/user', userRouter);
    }
}

export default new Server().app;