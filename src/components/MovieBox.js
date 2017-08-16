import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import MovieForm from './MovieForm.js';


//https://api.themoviedb.org/3/movie/550?api_key=a6d6e1a1d196277d3a36371310c4ff91
//apiKey: "a6d6e1a1d196277d3a36371310c4ff91"
export default class MovieBox extends Component {
  constructor() {
    super();

    this.handleApiFetch = this.handleApiFetch.bind(this);

    this.state = {
      searchResults: [],
      searchVal: null
    }
  }

  handleApiFetch(searchValue) {
    console.log(searchValue);
    if(searchValue === null){
      // fetch('https://api.themoviedb.org/3/search/movie?api_key=a6d6e1a1d196277d3a36371310c4ff91&language=en-US&query=rush%20hour&page=1&include_adult=false')
      // .then(resp => resp.json())
      // .then(resp => {
        this.setState({searchResults: null});
        console.log(this.state.searchResults);
    }
    else{
      fetch('https://api.themoviedb.org/3/search/movie?api_key=a6d6e1a1d196277d3a36371310c4ff91&language=en-US&query=' + searchValue + '&page=1&include_adult=false')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({searchResults: resp.results});
        console.log(this.state.searchResults)
      })
    }
  }

  componentDidMount() {
    this.handleApiFetch(this.state.searchVal);
  }


  render() {
    return(
      <div className="movieBox container">
        <h1>NotFlix</h1>
        <MovieForm handleApiFetch={this.handleApiFetch} />
        <MovieCard results={this.state.searchResults} />
      </div>
    )
  }

}
