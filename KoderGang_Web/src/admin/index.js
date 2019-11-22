/**
 *  Admin Dashboard Menu
 */
import React, {Component, Fragment} from 'react';
// Component
import AdminHeader from './Adminheader';
import {Route} from 'react-router-dom';
import Reports from './Reports';
import Invoices from './Invoices';
import Profile from './Profile';
import AdminProductList from './AdminProductList';
import Productedit from './Product/Productedit';
import Settings from './Settings';
import Collaboration from './Collaboration';
import Category from './Category/Category';
import Color from './Color/Color';
import Size from './Size/Size';
import Profileedit from './Profileedit';
import Productadd from './Product/Productadd';
import Login from './Login';
import Constants from "../common/Constants";
import {Cookies} from "react-cookie";
import ModalCustom from "../components/modal/Modal";
import ModalContent from "../components/modal/ModalContent";


const cookie = new Cookies();

class AdminDashboard extends Component {
    checkLogged() {
        let tokenLogged = cookie.get(Constants.TOKEN_LOGGED);
        console.log(tokenLogged);
        return !(tokenLogged === undefined || tokenLogged === "");
    }

    IsAdminPage(pathname) {
        if (this.checkLogged()) {
            return true
        }
        return false;
    }

    render() {
        const {location} = this.props;
        const {match} = this.props;
        return (
            <Fragment>
                {
                    this.IsAdminPage(location.pathname) ?
                        <div>
                            <ModalCustom/>
                            <ModalContent/>
                            <AdminHeader/>
                            <Route path={`${match.url}/Reports`} component={Reports}/>
                            <Route path={`${match.url}/Invoices`} component={Invoices}/>
                            <Route path={`${match.url}/Profile`} component={Profile}/>
                            <Route path={`${match.url}/Product`} component={AdminProductList}/>
                            <Route path={`${match.url}/Category`} component={Category}/>
                            <Route path={`${match.url}/Profileedit`} component={Profileedit}/>
                            <Route path={`${match.url}/Color`} component={Color}/>
                            <Route path={`${match.url}/Size`} component={Size}/>
                            <Route path={`${match.url}/Collaboration`} component={Collaboration}/>
                            <Route path={`${match.url}/Settings`} component={Settings}/>
                            <Route path={`${match.url}/product-add`} component={Productadd}/>
                            <Route path={`${match.url}/Product-edit/:category/:id`} component={Productedit}/>
                        </div>

                        :
                        <div className="app">
                            <Route exact component={Login}/>
                        </div>
                }
            </Fragment>
        )
    }
}

export default AdminDashboard;
