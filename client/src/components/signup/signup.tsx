import * as update from 'immutability-helper';
import * as React from 'react';
import './style.css';

class SignUp extends React.Component<__CustomTypes.SignupProps, __CustomTypes.SignupState> {
    constructor(props: __CustomTypes.SignupProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPass: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let {name, value} = e.target;
        this.setState(update(this.state, {[name]: {$set: value}}));
    }
    render() {
        const { name, email, password, confirmPass } = this.state;
        return (
            <div className="container">
                <form className="form-horizontal" role="form">
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <h2>Register New User</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}>
                                        <i className="fa fa-user"/>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="John Doe"
                                        onChange={this.onChangeHandler}
                                        value={name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label htmlFor="email">E-Mail</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}>
                                        <i className="fa fa-at"/>
                                    </div>
                                    <input 
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                        onChange={this.onChangeHandler}
                                        value={email}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}>
                                        <i className="fa fa-key"/>
                                        </div>
                                    <input 
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        onChange={this.onChangeHandler}
                                        value={password}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label htmlFor="password">Confirm Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}>
                                        <i className="fa fa-repeat"/>
                                    </div>
                                    <input
                                        type="password"
                                        name="confirmPass"
                                        className="form-control"
                                        id="password-confirm"
                                        placeholder="Password"
                                        onChange={this.onChangeHandler}
                                        value={confirmPass}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-success btn-lg btn-block">
                                <i className="fa fa-user-plus"/> Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;