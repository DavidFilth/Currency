import { Schema, model, SchemaTypes } from 'mongoose';

let AccountSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    owner: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        required: true
    },
    number: {
        type: String,
        required: false,
        unique: true
    },
    secretNumber:{
        type: String,
        required: true
    },
    creditLimit:{
        type: Number,
        required: true,
        default: 0
    },
    withdrawLimit:{
        type: Number,
        required: true,
        default: 0        
    },
    type:{
        type: String,
        required: true,
        enum: ['credit', 'debit']
    }
});

export default model('Account', AccountSchema);