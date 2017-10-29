import * as rules from './rules';

export const ruleRunnner = (field: string, name: string, ...validators: Function[]) => {
    return (state: object) => {
        for (let v of validators) {
            let errorMessageFunc = v(state[field], state);
            if (errorMessageFunc) {
                return {[field]: errorMessageFunc(name)};
            }
        }
        return null;
    };
};
export const run = (state: object, runners: Function[]): object => {
    return runners.reduce(
        (memo: object, runner: Function) => {
            return Object.assign(memo, runner(state));
        },
        {}
    );
};
export {rules};