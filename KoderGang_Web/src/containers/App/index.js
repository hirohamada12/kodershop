import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound} from '../'
import Header from "../../layout/header/Header";

class App extends Component {

    render() {

        return (
            <div className="app">
                <Header/>
                <div className="container mt-4">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
