import { Schema, SchemaTypes, model } from 'mongoose';

let transactionSchema = new Schema({
    date: Date,
    type: {
        type: String,
        required: true,
        enum: ['deposit', 'withdraw']
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    target: {
        type: SchemaTypes.ObjectId,
        ref: "Account",
        required: true
    },
    description: String
});

export default model('Transaction', transactionSchema);