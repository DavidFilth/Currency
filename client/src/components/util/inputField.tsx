import OptionallyDisplayed from './optionallyDisplayed';
import * as React from 'react';
import './inputField.css';

export default class InputField extends React.Component<__CustomTypes.InputFieldProps> {
    private pristine: boolean = false;
    constructor() {
        super();
        this.shouldDisplayError = this.shouldDisplayError.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }
    onFocusHandler() {
        this.pristine = true;
    }
    shouldDisplayError(): boolean {
        return this.pristine && this.props.errorText !== '';
    }
    render() {
        let error: boolean = this.shouldDisplayError();
        return (
            <div className="row" >
                <div className="col-md-3 field-label-responsive">
                    <label htmlFor={this.props.id}>
                        {this.props.label}:
                    </label>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className={'fa ' + this.props.addon}/>
                            </div>
                            <input
                                placeholder={this.props.placeholder}
                                type={this.props.type || 'text'}
                                onChange={this.props.onFieldChange}
                                className={'form-control ' + (error ? 'is-invalid' : '')}
                                value={this.props.value}
                                name={this.props.name}
                                id={this.props.id}
                                onFocus={this.onFocusHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <OptionallyDisplayed display={error}>
                        <div className={error ? 'text-danger' : ''} >
                            {this.props.errorText}
                        </div>
                    </OptionallyDisplayed>
                </div>
            </div>
        );
    }
}