import React, { Component } from "react";
import { Link } from "react-router-dom";

//landing page button (to show the list of breeds initally and to get back there)

class BreedButton extends Component {
  state = { 
    onClick: this.props.onClick
   }
  render() { 
    return ( 
      <div>
      <Link to="/breeds">
          <button type="button" onClick={this.state.onClick} className="btn btn-primary">To Breed List</button>
          
          </Link>
          </div>
     );
  }
}
 
export default BreedButton;
