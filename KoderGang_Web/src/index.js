import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import ReactDOM from 'react-dom'

import {ProductsData} from './actions/product';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import servicesstore from "./services/store";


import "@babel/polyfill";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import './layout/header/styles.css'

class Root extends React.Component {
    render() {
        servicesstore.dispatch(ProductsData());
        return (
            <Provider store={servicesstore}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWorker();
