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
    export interface SignUpProps extends validationObject {
        form: newUser & {confirmPass: string}
    }
    export interface LoginCompState extends validationObject {
        form: loginRequest;
    }
    export interface validationObject {
        isInvalid: boolean;
        validationErrors: object;
    }
    export interface optionallyDisplayed {
        display?: boolean | undefined;
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
    export interface Account {
        createdAt: Date,
        updatedAt: Date,
        owner?: User,
        balance: number,
        creditLimit: number,
        withdrawLimit: number,
        type: string;
    }
    export interface Transaction {
        date: Date,
        type: string,
        amount: number,
        author?: User,
        target?: Account,
        description?: string
    }
    export interface Store{
        user: {
            data: object,
            authenticated: boolean;
        }
    }
    export interface Action{
        type: string;
        success: boolean;
        payload: any;
    }
    export type ErrorDisplayer = (f: string) => string;
    export type Rule = (t: string, s?: Object) => ErrorDisplayer | null;
    export type Runner = (state: object) => object | null;
} 