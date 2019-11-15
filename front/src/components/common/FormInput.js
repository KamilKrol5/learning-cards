import React, {Component} from 'react';

class FormInput extends Component {
    render() {
        return (
            <div className="form-group">
                <input
                    className="form-input"
                    id={this.props.name + this.props.keyv}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="form-group-error">
                    {(this.props.touched && this.props.errors) && <span>{this.props.errors}</span>}
                </p>
            </div>
        );
    }
}

export default FormInput;