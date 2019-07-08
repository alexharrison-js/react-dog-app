import React, { Component } from "react";
import { Link } from "react-router-dom";



class BreedButton extends Component {
  state = { 
    onClick: this.props.onClick
   }
  render() { 
    return ( 
      <div>
          <button type="button" onClick={this.state.onClick} className="btn btn-info">Breed List</button>
          </div>
     );
  }
}
 
export default BreedButton;
