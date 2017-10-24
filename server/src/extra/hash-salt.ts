import * as bcrypt from 'bcryptjs';
let secret: string = process.env.SECRET || 'T0m4m4';
let setPassword = (value: string) => {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(secret, salt);
}
let comparePasswords = (value: string, hash: string) : boolean => {
    let valueHashed = bcrypt.hashSync(secret, value);
    console.log(`Comparing ${ valueHashed } and ${ hash }`);
    return  valueHashed === hash;
}

export {setPassword, comparePasswords};