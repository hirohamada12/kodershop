import registerServiceWorker from './registerServiceWorker'
import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'


import "@babel/polyfill";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import './layout/header/styles.css'
import Loader from "react-loader-spinner";

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const loading = () => (
    <div id="preloader">
        <Loader
            type="Puff"
            color="#04d39f"
            height={100}
            width={100}
        />
    </div>
);
ReactDOM.render(
    <Suspense fallback={loading()}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

registerServiceWorker();
