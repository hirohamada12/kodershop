import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import Modal from './components/components-overview/Modal'
import ModalContent from './components/components-overview/ModalContent'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/style.css";
import "./shards-dashboard/styleCustom.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <Modal/>
      <ModalContent/>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
