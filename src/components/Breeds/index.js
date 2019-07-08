import React, { Component } from "react";
// import { Link } from "react-router-dom";
import calls from '../../api/calls.js';
import BreedName from '../BreedName';
import DogCard from '../DogCard';

var temp = {
  "message": {
      "affenpinscher": [],
      "african": [],
      "airedale": [],
      "akita": [],
      "appenzeller": [],
      "basenji": [],
      "beagle": [],
      "bluetick": [],
      "borzoi": [],
      "bouvier": [],
      "boxer": [],
      "brabancon": [],
      "briard": [],
      "bulldog": [
          "boston",
          "english",
          "french"
      ],
      "bullterrier": [
          "staffordshire"
      ],
      "cairn": [],
      "cattledog": [
          "australian"
      ],
      "chihuahua": [],
      "chow": [],
      "clumber": [],
      "cockapoo": [],
      "collie": [
          "border"
      ],
      "coonhound": [],
      "corgi": [
          "cardigan"
      ],
      "cotondetulear": [],
      "dachshund": [],
      "dalmatian": [],
      "dane": [
          "great"
      ],
      "deerhound": [
          "scottish"
      ],
      "dhole": [],
      "dingo": [],
      "doberman": [],
      "elkhound": [
          "norwegian"
      ],
      "entlebucher": [],
      "eskimo": [],
      "frise": [
          "bichon"
      ],
      "germanshepherd": [],
      "greyhound": [
          "italian"
      ],
      "groenendael": [],
      "hound": [
          "afghan",
          "basset",
          "blood",
          "english",
          "ibizan",
          "walker"
      ],
      "husky": [],
      "keeshond": [],
      "kelpie": [],
      "komondor": [],
      "kuvasz": [],
      "labrador": [],
      "leonberg": [],
      "lhasa": [],
      "malamute": [],
      "malinois": [],
      "maltese": [],
      "mastiff": [
          "bull",
          "english",
          "tibetan"
      ],
      "mexicanhairless": [],
      "mix": [],
      "mountain": [
          "bernese",
          "swiss"
      ],
      "newfoundland": [],
      "otterhound": [],
      "papillon": [],
      "pekinese": [],
      "pembroke": [],
      "pinscher": [
          "miniature"
      ],
      "pointer": [
          "german",
          "germanlonghair"
      ],
      "pomeranian": [],
      "poodle": [
          "miniature",
          "standard",
          "toy"
      ],
      "pug": [],
      "puggle": [],
      "pyrenees": [],
      "redbone": [],
      "retriever": [
          "chesapeake",
          "curly",
          "flatcoated",
          "golden"
      ],
      "ridgeback": [
          "rhodesian"
      ],
      "rottweiler": [],
      "saluki": [],
      "samoyed": [],
      "schipperke": [],
      "schnauzer": [
          "giant",
          "miniature"
      ],
      "setter": [
          "english",
          "gordon",
          "irish"
      ],
      "sheepdog": [
          "english",
          "shetland"
      ],
      "shiba": [],
      "shihtzu": [],
      "spaniel": [
          "blenheim",
          "brittany",
          "cocker",
          "irish",
          "japanese",
          "sussex",
          "welsh"
      ],
      "springer": [
          "english"
      ],
      "stbernard": [],
      "terrier": [
          "american",
          "australian",
          "bedlington",
          "border",
          "dandie",
          "fox",
          "irish",
          "kerryblue",
          "lakeland",
          "norfolk",
          "norwich",
          "patterdale",
          "russell",
          "scottish",
          "sealyham",
          "silky",
          "tibetan",
          "toy",
          "westhighland",
          "wheaten",
          "yorkshire"
      ],
      "vizsla": [],
      "weimaraner": [],
      "whippet": [],
      "wolfhound": [
          "irish"
      ]
  },
  "status": "success"
};
var arr = temp.message; //to be replaced with live data
var breedsAfterCall = []; //holds a list of breeds AND subBreeds
        for (var item in arr) {
            breedsAfterCall.push(item);
        }
console.log(breedsAfterCall);
class Breeds extends Component {
  state = { 
    breeds: breedsAfterCall
   }
   

   componentDidMount = () => (
    calls.getBreeds().then((data) => (arr = data.data.message)).then(
        this.setState({
            breeds: breedsAfterCall

        })
        ).then(()=>(console.log("working"))
    )
)


//on click of the Breed this should reroute to a card of the breed taking the props
render(){  
    var rendering = []; //holds the actual component to be rendered card or breed
        
        // console.log(breedsAfterCall);
    for (let i = 0; i < breedsAfterCall.length; i++) {
        var currentDog = breedsAfterCall[i];
        var subBreedDogs = arr[currentDog]; 
        //call getBreedPics and pass in to breed comp
        if (subBreedDogs.length === 0) {
            rendering.push(
                <BreedName
                    value={currentDog}
                    parentBreed={"none"}
                    clicked="false"
                    imgurl=""
                    imgList=""
                />
                )

        } else {
            //call getSubBreedPics and pass in to breed component
            var subBreedHolder;
            for (let i = 0; i < subBreedDogs.length; i++) {
                subBreedHolder = subBreedDogs[i];
                rendering.push(
                
                <BreedName
                    value={subBreedHolder}
                    parentBreed={currentDog}
                    imgurl=""
                    clicked="false"
                />
                
                )
            }
        };
    
}
return (
  <div>
      {rendering}
  </div>
    );
}
}
export default Breeds;
// this needs no back button but CARD does