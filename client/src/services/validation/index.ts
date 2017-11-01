export const ruleRunnner = (
    field: string, 
    name: string, 
    ...rules: __CustomTypes.Rule[]
): __CustomTypes.Runner => {
    return (state: object) => {
        for (let rule of rules) {
            let errorMessageFunc = rule(state[field], state);
            if (errorMessageFunc) {
                return {[field]: errorMessageFunc(name)};
            }
        }
        return null;
    };
};
export const run = (state: object, runners: __CustomTypes.Runner[]): object => {
    return runners.reduce(
        (memo: object, runner: Function) => {
            return Object.assign(memo, runner(state));
        },
        {}
    );
};