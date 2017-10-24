import { setPassword, comparePasswords } from '../extra/hash-salt';
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
    adress: String,
    phone: Number,
    clientNumber: {
        type: String,
        required: false,
        unique: true
    },
    accounts:[
        {
            type: SchemaTypes.ObjectId,
            ref: "Account"
        }
    ]
});
userSchema.methods.comparePasswords = comparePasswords;

export default model('User', userSchema);