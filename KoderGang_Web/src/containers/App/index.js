import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound} from '../';
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Shop from "../../components/shop"
import ShopingCart from "../../components/shop/ShopingCart"
import CheckOut from "../../components/shop/CheckOut"
import ProductDetail from "../../components/shop/product-detail"
import Aboutus from "../../components/About/Aboutus"
import Contactus from "../../components/Contact/Contactus"
import AdminDashboard from "../../admin"
import ModalCustom from "../../components/modal/Modal";
import Login from "../../admin/Login";

class App extends Component {
    getUrl(pathname) {
        let pathArray = pathname.split('/');
        return pathArray[1] === "admin";
    }

    render() {
        const {location} = this.props;
        return (
            <Fragment>
                {
                    this.getUrl(location.pathname) ?
                        <Switch>
                            <Route path="/admin" component={AdminDashboard} />
                        </Switch>
                        :
                        <div className="app">
                            <Header/>
                            <ModalCustom/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/shop" component={Shop}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/category/" component={Shop}/>
                                <Route exact path="/ShopingCart" component={ShopingCart}/>
                                <Route exact path="/CheckOut" component={CheckOut}/>
                                <Route exact path="/Aboutus" component={Aboutus}/>
                                <Route path={`/shop/:category/:id`} component={ProductDetail}/>
                                <Route exact path="/Contactus" component={Contactus}/>
                                <Route component={NotFound}/>
                            </Switch>
                            <Footer/>
                        </div>
                }
            </Fragment>
        )
    }
}

export default App
