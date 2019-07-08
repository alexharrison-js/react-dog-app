import React, { Component } from "react";
import { Link } from "react-router-dom";
import calls from '../../api/calls.js';

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
var arr = {}; //to be replaced with live data


class Breeds extends Component {
  state = { 
    breeds: arr
   }

   componentDidMount = () => (
    calls.getBreeds().then(
        (data) => (
        arr = (data.data.message),
        this.setState({
            breeds: arr
        })
        )
        ).then(()=>(console.log(arr))
    ).then(this.setState({

    }))
)


//on click of the Breed this should reroute to a card of the breed taking the props
render(){  
return (
  <p>THIS IS THE LIST OF BREEEDS!! WOOO</p>
    );
}
}
export default Breeds;
// this needs no back button but CARD does