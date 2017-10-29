import { setPassword, comparePasswords } from '../tools/hash-salt';
import { Schema, SchemaTypes, model } from 'mongoose';

let userSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true,
        set: setPassword
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accounts:[
        {
            type: SchemaTypes.ObjectId,
            ref: "Account"
        }
    ]
});
userSchema.methods.getPlainUser = (user: __CustomTypes.User) => {
    let {name, password, email, createdAt, updatedAt, accounts} = user
    return {name, password, email, createdAt, updatedAt, accounts};
};
userSchema.methods.comparePasswords = comparePasswords;
export default model('User', userSchema);