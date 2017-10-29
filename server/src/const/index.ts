export const MONGO_URI: string = process.env.DB_URI || 'mongodb://localhost/Currency';
export const JWT_SECRET = process.env.JWT_SECRET || 'D4v1d';
export const port = 4000;
export const FB_CLIENT_ID = process.env.CLIENT_ID || '293402121063972';
export const FB_CLIENT_SECRET = process.env.CLIENT_SECRET || "1ee3ad0764fe3b542d53f9e974eb6993";
export const callbackURL = `http://localhost:${port}/api/v1/login/facebook/return/`;
