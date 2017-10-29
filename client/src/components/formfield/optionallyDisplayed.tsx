import * as React from 'react';

export default class OptionallyDysplayed extends React.Component<__CustomTypes.optionallyDisplayed> {
    render() {
        return (this.props.display ) ? <div>{this.props.children}</div> : null;
    }
}