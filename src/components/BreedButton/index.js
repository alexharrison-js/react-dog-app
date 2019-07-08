import React from "react";
import { Link } from "react-router-dom";


function BreedButton(props) {
  return (
  <Link to="/Breeds">
    <button  className="btn btn-info"> Let's Look at some dogs!</button>

  </Link>
    );
}
export default BreedButton;
