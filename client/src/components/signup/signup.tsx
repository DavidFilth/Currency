import { run, ruleRunnner } from '../../util/validation';
import * as rules from '../../util/validation/rules';
import * as update from 'immutability-helper';
import { withRouter } from 'react-router-dom';
import Input from '../util/inputField';
import * as React from 'react';

let fieldValidations: __CustomTypes.Runner[] = [
    ruleRunnner('name', 'Name', rules.required),
    ruleRunnner('email', 'Email', rules.required, rules.email),
    ruleRunnner('password', 'Password', rules.required, rules.minLength(4)),
    ruleRunnner('confirmPass', 'Confirmation', rules.required, rules.mustMatch('password', 'Password'))
];

class SignUp extends React.Component<{}, __CustomTypes.SignUpProps > {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPass: ''
            },
            isInvalid: true,
            validationErrors: {}
        };
        this.handleFieldChanged = this.handleFieldChanged.bind(this);
        this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
        this.errorFor = this.errorFor.bind(this);
    }
    componentWillMount() {
        let validators = run(this.state, fieldValidations);
        this.setState({
            validationErrors: validators,
            isInvalid: Object.keys(validators).length > 0
        });
    }
    handleSubmitClicked(e: React.UIEvent<HTMLFormElement>) {
        e.preventDefault();
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
    render() {
        let { name, email, password, confirmPass } = this.state.form;
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
                            <h2>Register New User</h2>
                            <hr/>
                        </div>
                    </div>
                    <Input
                        name="name"
                        id="name"
                        placeholder="Juanito"
                        label="Name"
                        onFieldChange={this.handleFieldChanged('name')}
                        value={name}
                        addon="fa-user"
                        errorText={this.errorFor('name')}
                    />
                    <Input
                        name="email"
                        id="email"
                        placeholder="a@b.com"
                        label="E-Mail"
                        onFieldChange={this.handleFieldChanged('email')}
                        value={email}
                        addon="fa-at"
                        type="email"
                        errorText={this.errorFor('email')}
                    />
                    <Input
                        name="password"
                        id="password"
                        placeholder="1234"
                        label="Password"
                        onFieldChange={this.handleFieldChanged('password')}
                        value={password}
                        type="password"
                        addon="fa-key"
                        errorText={this.errorFor('password')}
                    />
                    <Input
                        name="confirmPass"
                        id="confirmPass"
                        label="Confirm"
                        placeholder="1234"
                        type="password"
                        onFieldChange={this.handleFieldChanged('confirmPass')}
                        value={confirmPass}
                        addon="fa-repeat"
                        errorText={this.errorFor('confirmPass')}
                    />
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            
                            <button 
                                type="submit"
                                className="btn btn-success btn-lg btn-block"
                                disabled={this.state.isInvalid}
                            >
                                <i className="fa fa-user-plus"/> Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUp);