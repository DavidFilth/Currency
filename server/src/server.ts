import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import { MONGO_URI } from './const';
import * as express from 'express';
import * as helmet from 'helmet';
import router from './routers';
import * as cors from 'cors';
import auth from './auth';

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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
    }
    public config(): void{
        // Connection to the DB
        mongoose.connect( MONGO_URI, {
            useMongoClient: true
        }, (err: Error) => {
            if(err){
                console.error(err);
            } else{
                console.log('Successfully connected to ', MONGO_URI);
            }
        });

        // Initial configuration
        this.app.use(bodyParser.urlencoded({ extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(cookieParser());
        // Authentication Set Up
        this.app.use(auth);
        // Router handler
        this.app.use('/', router);
        // Static files
        this.app.use('/', express.static('client/build'));
    }
}

export default new Server().app;