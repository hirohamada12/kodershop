import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound} from '../';
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

class App extends Component {

    render() {

        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App
