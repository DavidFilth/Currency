declare namespace __CustomTypes {
    interface User extends newUser {
        createdAt: Date;
        updatedAt: Date;
        accounts: any[];
        comparePasswords(v: string, h: string) : boolean;
        getPlainUser(U: User): User;
    }
    export interface newUser {
        name: string;
        password: string;
        email: string;
    }
    export interface loginRequest {
        email: string;
        password: string;
    }
    export interface SignUpProps {
    }
    export interface SignUpState extends validationObject {
        value: newUser & {confirmPass: string}
    }
    export interface LoginCompState extends validationObject {
        value: loginRequest;
    }
    export interface validationObject {
        isInvalid: boolean;
        validationErrors: object;
    }
    export interface optionallyDisplayed {
        display: boolean;
    }
    export interface InputFieldProps {
        onFieldChange(e: any) : void;
        placeholder?: string;
        errorText: string;
        addon?: string;
        label?: string;
        type?: string;
        name?: string;
        value: string;
        id?: string;
    }
    export type ErrorDisplayer = (f: string) => string;
    export type Rule = (t: string, s?: Object) => ErrorDisplayer | null;
    export type Runner = (state: object) => object | null;
} 