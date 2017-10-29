import * as ErrorMessages from './errorMessages';

export const required = (text: string) => {
    return text ? null : ErrorMessages.isRequired;
};
export const mustMatch = (field: string, fieldName: string) => {
    return (text: string, state: Object) => {
        return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
    };
};
export const minLength = (length: number) => {
    return (text: string) => {
        return text.length >= length ? null : ErrorMessages.minLength(length);
    };
};
export const email = (text: string) => {
    return text.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ? null : ErrorMessages.email;
};