import React, { Component } from 'react';
import DogCard from '../DogCard';
import BreedButton from '../BreedButton';
import calls from '../../api/calls.js';

//card button is meant to make the api call with the dog breed
//and return a starting image as well as a list of alternate images
//so that when we want to load a new picture there is no api call

class CardButton extends Component {
    state = {
        clicked: false,
        breed: this.props.breed,
        parentBreed: this.props.parentBreed,
        imgurl: "not yet",
        imgList: "not yet",
        currIndex: 0

    }
    handleData = (data) => (data = data.data.message,
        // data = JSON.parse(JSON.stringify(data)),
        // console.log(data),
        // I think it's from JSON.stringify adding the escape characters
        //
        // the imgurl (and all urls for that matter) are returned in an odd format
        // 
        this.setState({
            imgList: data,
            imgurl: data[this.state.currIndex],
            currIndex: (this.state.currIndex + 1)
        }),
        console.log("clicked or not:  " + this.state.clicked),
        console.log("here is imgurl: " + this.state.imgurl)
    )
    componentWillMount = () => {
        (this.state.parentBreed === "none") ?
            calls.getPicsBreed(this.state.breed).then(data => this.handleData(data)) :
            calls.getPicsSubBreed(this.state.parentBreed, this.state.breed).then(data => this.handleData(data))
    }
    onClick = () => (
        console.log("clicked on the back to breeds button"),
        this.state.clicked === false ?
            this.setState({ clicked: true }) :
            this.setState({ clicked: false }),
        console.log("clicked or not: " + this.state.clicked)
        //not logging

    )
    newpic = () => (
        this.setState({
            imgurl: this.state.imgList[this.state.currIndex],
            currIndex: (this.state.currIndex + 1)
        }),
        console.log("newpic clicked")
        //passed down and bubbles up event to parret component where it is console.logged
    )
    //onStateChange
    render() {


        //pass in props to DogCard to render
        //imgList and imgurl shouldbe available at the time of click (which changes state and then renders Dog Card)
        return (
            <div>
                {this.state.clicked ?
                    <div><DogCard
                        breed={this.state.breed}
                        parentBreed={this.state.parentBreed}
                        imgurl={this.state.imgurl}
                        imgList={this.state.imgList}
                        onClick={this.newpic}

                    /> <BreedButton
                        onClick={this.onClick}
                     /> </div>
                    : <div>
                        <button type="button" className="btn btn-info" onClick={this.onClick}> Let's see a Pic!</button>
                    </div>}
            </div>
        )

    }
}

export default CardButton;