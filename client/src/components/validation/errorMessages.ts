export const isRequired = (fieldName: string) => `${fieldName} is required`;

export const mustMatch = (otherFieldName: string) => {
    return (fieldName: string) => `${fieldName} must match ${otherFieldName}`;
};
export const minLength = (length: number) => {
    return (fieldName: string) => `${fieldName} must be at least ${length}`;
};
export const email = (fieldName: string) => {
    return `${fieldName} is not a valid email`;
};