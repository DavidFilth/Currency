import * as bcrypt from 'bcryptjs';
let setPassword = (value: string) => {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
}
let comparePasswords = (value: string, hash: string) : boolean => {
    return bcrypt.compareSync(value, hash);
}

export {setPassword, comparePasswords};