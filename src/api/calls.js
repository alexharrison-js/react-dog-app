import axios from 'axios';

//using a quick ajax request package called axios
//writing an object to store calls to api for data fetch

// getPics{Breed/Subbreed} returns an array of MASS of images
//images are stored in component state so that they can be cycled through without hitting the api again
export default {
getBreeds: function (){
    return axios.get("https://dog.ceo/api/breeds/list/all")
},
getPicsBreed: function(breed){
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images")
},
getPicsSubBreed: function(breed, subBreed){
    return axios.get("https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images")
}
};