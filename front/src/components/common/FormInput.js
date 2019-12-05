import React, {Component} from 'react';

/**
 * Komponent zawierający pole na dane wraz z komunikatem o błędzie
 */
class FormInput extends Component {
    render() {
        return (
            <div className="m-form-input-group m-flex-ctr-cnt">
                <input
                    className="m-form-input-input"
                    id={this.props.name + this.props.keyv}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="m-form-input-error">
                    {(this.props.touched && this.props.errors) && <span>{this.props.errors}</span>}
                </p>
            </div>
        );
    }
}

export default FormInput;