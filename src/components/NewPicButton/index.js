import React, { Component } from 'react';

class NewPicButton extends Component {
    state = { 
        onClick: this.props.onClick
     }
    render() { 
        return ( 

            <div>
            <button type="button" className="btn btn-success" onClick={this.state.onClick}> New Pic!</button>
            </div>         );
    }
}
 
export default NewPicButton;