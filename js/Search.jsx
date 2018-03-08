import React, { Component } from 'react';
import data from '../data.js';
import ShowCard from './ShowCard';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleInput = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    render(){
        return(
            <div className="search">
                <header>
                    <h1>TvHouse</h1>
                    <input onChange={this.handleInput} type="text" placeholder="Search" value={this.state.searchTerm}/>
                </header>
                <div>
                {data.shows
                    .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
                    .map((show) => <ShowCard key={show.imdbID} {...show} />)}
                </div>
            </div>
        )
    }
};

export default Search
