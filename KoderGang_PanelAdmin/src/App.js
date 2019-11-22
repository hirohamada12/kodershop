import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Modal from './components/components-overview/Modal'
import ModalContent from './components/components-overview/ModalContent'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/style.css";
import "./shards-dashboard/styleCustom.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import withTracker from "./withTracker";
import routes from "./routes";
import Constants from "./common/Constants";
import Login from './views/Login'
import {Cookies} from "react-cookie";

const cookie = new Cookies();

class App extends React.Component {
  checkLogged() {
    let tokenLogged = cookie.get(Constants.TOKEN_LOGGED);
    return !(tokenLogged === undefined || tokenLogged === "");
  }


  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div style={{
          flexDirection: 'column',
          height: '100%',
          justifyContent: "center",
          alignItems: 'center',
          margin: 0
        }}>
          <Modal/>
          <ModalContent/>
          <Route
            path={'/login'}
            exact
            component={withTracker(props => {
              return (
                <Login {...props} />
              );
            })}
          />
          {routes.map((route, index) => {
            if (!this.checkLogged()) {
              return <Redirect key={0} from="/" to="/login"/>;
            } else {
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
            }
          })}
        </div>
      </Router>
    )
  }
}

export default App


