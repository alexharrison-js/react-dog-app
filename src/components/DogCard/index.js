import React, { Component } from 'react';
import NewPicButton from '../NewPicButton';//return new pic

class DogCard extends Component {
    state = {
        breed: this.props.breed,
        parentBreed: this.props.parentBreed,
        imgurl: this.props.imgurl,
        imgList: this.props.imgList,
        onClick: this.props.onClick,
        currIndex: 0
    }
    onClick = () => (
        this.setState({
            imgurl: this.state.imgList[this.state.currIndex],
            currIndex: (this.state.currIndex + 1)
        })

    )


    render() {
        return (
            <div className="card" >
                <img src={this.state.imgurl} className="card-img-top dogpic" alt="Thain't nothing here yet" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.breed}</h5>
                    <p className="card-text">Parent Breed: {this.state.parentBreed}</p>
                    <NewPicButton 
                        onClick={this.onClick}
                    />
                </div>
            </div>
        );
    }
}

export default DogCard;