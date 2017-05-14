import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import './TextArea.scss';

class TextArea extends Input {
    constructor(props) {
        const _props = super(props);
        this.props = _props;
    }
    render(){
        const {
               width,
               defaultValue,
               rows,
               cols,
               noResize,
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
        const textAreaResizable = noResize ? 'noResize' : noResize;
        return (
            <span className="textarea-wrapper"><textarea {...commonProps} className={textAreaResizable}></textarea></span>
        ) 
    }

}
TextArea.propTypes = {
    ...Input.propTypes,
    rows: PropTypes.number,
    cols: PropTypes.number,
    noResize: PropTypes.bool
}
export default TextArea