'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Input from './components/input/Input';
import TextArea from './components/textarea/TextArea';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    onInput(v){
        console.log(v); 
    }
    onClose(){
        this.setState({showModal:false})
    }
    render(){
        return (
            <div className="page-container">
                <p><Input onInput={this.onInput} width="200px" type="text" /> </p>
                
                <p><TextArea onInput={this.onInput}  width="300px" rows={3} placeholder="input here ..."/></p>
                
                <div>
                    <Modal title="服务站" visiable={ this.state.showModal } onClose={this.onClose.bind(this)}>
                        <span>
                            Hello Modal
                        </span>
                    </Modal>
                </div>
                <Button disabled type="default" onClick={ () => this.setState({showModal:true}) }>show Modal</Button>&nbsp;
            </div>
        )
    }
}

ReactDom.render((
    <Home />
), document.getElementById('app'));
