export const isRequired: __CustomTypes.ErrorDisplayer = 
    (fieldName: string) => `${fieldName} is required`;

export const mustMatch = 
    (otherFieldName: string): __CustomTypes.ErrorDisplayer => {
    return (fieldName: string) => `${fieldName} must match ${otherFieldName}`;
};
export const minLength = (length: number): __CustomTypes.ErrorDisplayer => {
    return (fieldName: string) => `${fieldName} must be at least ${length}`;
};
export const email: __CustomTypes.ErrorDisplayer = (fieldName: string) => {
    return `${fieldName} is not a valid email`;
};