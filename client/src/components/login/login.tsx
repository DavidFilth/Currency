import { run, ruleRunnner, rules } from '../validation';
import * as update from 'immutability-helper';
import InputField from '../formfield/inputField';
import * as React from 'react';

const fieldValidations = [
    ruleRunnner('email', 'E-Mail', rules.required, rules.email),
    ruleRunnner('password', 'Password', rules.required, rules.minLength(4))
];

class Login extends React.Component<{}, __CustomTypes.loginCompState > {
    constructor() {
        super();
        this.handleFieldChanged = this.handleFieldChanged.bind(this);
        this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
        this.errorFor = this.errorFor.bind(this);
        this.state = {
            isValid: true,
            validationErrors: {},
            email: '',
            password: ''
        };
    }
    componentWillMount() {
        let validators = run(this.state, fieldValidations);
        this.setState({
            validationErrors: validators,
            isValid: Object.keys(validators).length > 0
        });
    }
    errorFor(field: string) {
        return this.state.validationErrors[field] || '';
    }
    handleFieldChanged(field: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            let newState = update(this.state, {
                [field]: {$set: e.target.value}
            }) as __CustomTypes.loginCompState;
            newState.validationErrors = run(newState, fieldValidations);
            newState.isValid = Object.keys(newState.validationErrors).length > 0;
            this.setState(newState);
        };
    }
    handleSubmitClicked(e: React.UIEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form 
                    className="form-horizontal"
                    onSubmit={this.handleSubmitClicked} 
                    noValidate={true}
                >
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <h2>Please Login</h2>
                            <hr/>
                        </div>
                    </div>
                    <InputField
                        placeholder="Juan"
                        showError={this.state.isValid}
                        errorText={this.errorFor('email')}
                        label="E-mail"
                        addon="fa-at"
                        type="email"
                        text={this.state.email}
                        onFieldChange={this.handleFieldChanged('email')}
                    />
                    <InputField
                        placeholder="1234"
                        showError={this.state.isValid}
                        errorText={this.errorFor('password')}
                        label="Password"
                        addon="fa-key"
                        type="password"
                        text={this.state.password}
                        onFieldChange={this.handleFieldChanged('password')}
                    />
                    <div className="row" style={{paddingTop: '1rem'}}>
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-lg btn-block"
                                disabled={this.state.isValid}
                            >
                                <i className="fa fa-sign-in"/> Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;