declare namespace __CustomTypes {
    interface User extends newUser {
        creatcreatedAt: Date;
        updatedAt: Date;
        clientNumber: number;
        accounts: any[];
        comparePasswords(v: string, h: string) : boolean;
    }
    export interface newUser {
        name: string;
        password: string;
        email: string;
        adress: string;
        phone: number;
    }
    export interface loginRequest {
        clientNumber: number;
        password: string;
    }
} 