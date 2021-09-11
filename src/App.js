import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    { /* Menu */ }
                    <Navigation/>
                    { /* Content */ }
                        <Switch>
                            { this.showComponent(routes) }
                        </Switch>
                </div>
            </BrowserRouter>

        )
    }
    showComponent = (routes) => {
        var result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                    key={ index } 
                    path={ route.path } 
                    exact={ route.exact } 
                    component={ route.main }/>
                )
            })
        }
        return result;
    }
}

export default App;
