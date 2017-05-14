import React from 'react';
import PropTypes from 'prop-types'
import './Modal.scss';
import Button from '../button/Button';

class Modal extends React.Component{
    
    constructor(props){
        super(props);
    }
    closeModal(){
        const { onClose } = this.props;
        if(typeof onClose === 'function') onClose();
    }
    render(){
        const { visiable, title, children } = this.props;
        return (
            <div className="modal-wrapper" style={{display: !!visiable ? 'block' : 'none'}}>
                <div className="modal">
                    <div className="modal-header">{ title }</div>
                    <div className="modal-body">{ children }</div>
                    <div className="modal-footer">
                        <Button onClick={this.closeModal.bind(this)}>取消</Button>
                    </div>
                </div>
                <div className="modal-layer"></div>
            </div>
        )
    }
}
Button.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
}
export default Modal;