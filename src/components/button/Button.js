import React from 'react';
import PropTypes from 'prop-types'
import './Button.scss';

class Button extends React.Component{
    
    constructor(props){
        super(props);
    }
    onClick(){
        const { onClick } = this.props;
        if(typeof onClick === 'function') onClick();
    }
    render(){
        const { children, type, disabled } = this.props;
        const className = type ? `button button-${type}` : 'button button-default';
        return (
            <button type="button" 
                    className={className}
                    onClick={this.onClick.bind(this)}
                    disabled={disabled}
                    >{ children }</button>
        )
    }
}
Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}
export default Button;