//@flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing.jsx';
import Search from './Search';
import Details from './Details';
import preLoad from '../data';

const FourOhFour = () => <h1>404 </h1>;


const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/search" component={ (props) => <Search shows={preLoad.shows} {...props}/> }/>
                        <Route path="/details/:id" component={ (props: { match: Match}) => {
                            const selectedShow = preLoad.shows.find((show) => props.match.params.id === show.imdbID);
                            return <Details show={selectedShow} {...props}/>
                            }}/>
                        <Route component={FourOhFour} />
                    </Switch> 
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;