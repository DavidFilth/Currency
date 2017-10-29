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
    export interface SignupProps {
        onSubmitHandler(): void;
        onChangeHandler(): void;
    }
    export interface SignupState extends newUser {
        confirmPass: string;
    }
    export interface optionallyDisplayed {
        display: boolean;
    }
    export interface InputFieldProps {
        onFieldChange(e: any) : void;
        placeholder?: string;
        showError: boolean;
        errorText: string;
        addon?: string;
        label?: string;
        type?: string;
        text?: string;
        name?: string;
        id?: string;
    }
    export interface loginCompState extends loginRequest {
        isValid: boolean;
        validationErrors: object;
    }
} 