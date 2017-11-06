import { withRouter, RouteComponentProps } from 'react-router-dom';
import { run, ruleRunnner } from '../../util/validation';
import * as rules from '../../util/validation/rules';
import * as update from 'immutability-helper';
import InputField from '../util/inputField';
import * as React from 'react';

const fieldValidations = [
    ruleRunnner('email', 'E-Mail', rules.required, rules.email),
    ruleRunnner('password', 'Password', rules.required, rules.minLength(4))
];

class Login extends React.Component<RouteComponentProps<{}>, __CustomTypes.LoginCompState > {
    constructor() {
        super();
        this.handleFieldChanged = this.handleFieldChanged.bind(this);
        this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
        this.errorFor = this.errorFor.bind(this);
        this.state = {
            isInvalid: true,
            validationErrors: {},
            form: {
                email: '',
                password: ''
            }
        };
    }
    componentWillMount() {
        let validators = run(this.state, fieldValidations);
        this.setState({
            validationErrors: validators,
            isInvalid: Object.keys(validators).length > 0
        });
    }
    errorFor(field: string) {
        return this.state.validationErrors[field] || '';
    }
    handleFieldChanged(field: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            let newState = update(this.state, {
                form: {
                    [field]: {$set: e.target.value}
                }
            });
            newState.validationErrors = run(newState.form, fieldValidations);
            newState.isInvalid = Object.keys(newState.validationErrors).length > 0;
            this.setState(newState);
        };
    }
    handleSubmitClicked(e: React.UIEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    render() {
        let { email, password } = this.state.form;
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
                        placeholder="a@b.com"
                        errorText={this.errorFor('email')}
                        label="E-mail"
                        addon="fa-at"
                        type="email"
                        value={email}
                        onFieldChange={this.handleFieldChanged('email')}
                    />
                    <InputField
                        placeholder="1234"
                        errorText={this.errorFor('password')}
                        label="Password"
                        addon="fa-key"
                        type="password"
                        value={password}
                        onFieldChange={this.handleFieldChanged('password')}
                    />
                    <div className="row" style={{paddingTop: '1rem'}}>
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-lg btn-block"
                                disabled={this.state.isInvalid}
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

export default withRouter(Login);