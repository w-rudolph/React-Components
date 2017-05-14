import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
class Input extends Component{
    constructor(props) {
        super(props);
    }
    handleInputEvent(callback, e){
        if(typeof callback === 'function') callback(e.target.value);
    }
    onKeyPress(e){
        return false;
    }
    render(){
        const {
               type,
               width,
               defaultValue,
               disabled,
               readOnly,
               required,
               placeholder,
               onInput,
               onChange,
               onFocus,
               onBlur,
            } = this.props;
        const commonProps = {
            type: type || 'text',
            defaultValue: defaultValue || '',
            disabled,
            readOnly,
            required,
            placeholder,
            onKeyPress: this.onKeyPress.bind(this),
            onInput: this.handleInputEvent.bind(this, onInput),
            onChange: this.handleInputEvent.bind(this, onChange),
            onFocus: this.handleInputEvent.bind(this, onFocus),
            onBlur: this.handleInputEvent.bind(this, onBlur) 
        };
        return (
            <span className="input-wrapper" data-type={'input-' + type} style={{width:width}}>
                <input {...commonProps} />
            </span>
        )
    }
}
Input.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
}
export default Input;