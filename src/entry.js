'use strict';
'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Input from './components/input/Input';
import TextArea from './components/textarea/TextArea';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    onInut(v){
        console.log(v); 
    }
    render(){
        return (
            <div className="page-container">
                <p><Input onInut={this.onInut} width="200px" type="text" /> </p>
                
                <p><TextArea noResize onInut={this.onInut}  width="200px" rows={3} placeholder="input here ..."/></p>
            </div>
        )
    }
}

ReactDom.render((
    <Home />
), document.getElementById('app'));
