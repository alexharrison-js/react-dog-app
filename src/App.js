import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BreedButton from './components/BreedButton';
import Search from './components/SearchResults';
import Breeds from './components/Breeds';
import DogCard from './components/DogCard'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.pixabay.com/photo/2015/02/12/17/52/canine-634020_1280.jpg" className="App-logo" alt="logo" />
        <br />
        <br />

        <p>
          I love dogs ... You love dogs ... 
          </p>
          <Router>
          <div>
          <Route exact path="/" component={BreedButton} />
          <Route exact path="/breeds" component={Breeds} />
          <Route exact path="/breedcard" component={DogCard} />
          <Route exact path="/search" component={Search} />
          </div> 
          </Router>
      </header>
    </div>
  );
}
//breedcard component should load the card of the selected dog
//GOTTA MAKE THAT BUTTON POINT TO BREEDLIST PAGE!
export default App;
