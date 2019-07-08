import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardButton from '../CardButton';

class BreedName extends Component {
    state = { 
        name: this.props.value,
        parentBreed: this.props.parentBreed,
        clicked: false,
        imgurl: this.props.imgurl,
        imgList: this.props.imgList
     }
     
    render() { 
        return (

            <div>
            <h2 className="{this.state.name}"> {this.state.name}</h2>
                <h5>Breed Family: {this.state.parentBreed}</h5>
            <CardButton 
                breed={this.state.name}
                parentBreed={this.state.parentBreed}
            />
            
        </div>
          );
    }
}
 
export default BreedName;