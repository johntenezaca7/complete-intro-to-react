//@flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';

type Show = {
    title: string, description: string, year: string, imdbID: string, trailer: string, poster: string
}

class Search extends Component {
    state = {
        searchTerm: ''
    };
    props: {
        shows: Array<Show>
    };
    handleInput = (event: SyntheticKeyboardEvent & { target: HTMLInputElement} ) => {
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
                {this.props.shows
                    .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
                    .map((show) => <ShowCard key={show.imdbID} {...show} />)}
                </div>
            </div>
        )
    }
};

export default Search
