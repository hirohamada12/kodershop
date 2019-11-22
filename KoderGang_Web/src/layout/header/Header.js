import React, {Component, Fragment} from "react";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import navLinks from './NavLinks.js';
import i18n from '../../common/i18n'
import {
    Col,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap';
class Header extends Component {
    constructor(props) {

        super(props);
        this.ReadCartItems = this.ReadCartItems.bind(this);
        this.ReadWishListItems = this.ReadWishListItems.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            timeout: true,
            modal: false,
            activeTab: '1',
            isOpen: false,
            collapsed: true,
            CartHide: true,
            classset: '',
            //  getproduct:AllProduct
        }
        let removeFromCart, removeFromWishList;
        this.toggle = this.toggle.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.ShowCart = this.ShowCart.bind(this);
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    logintoggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    ReadCartItems() {
        return JSON.parse(localStorage.getItem("LocalCartItems"));
    }

    removeFromCart = (Index) => {
        let UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
        this.forceUpdate();
    };

    ReadWishListItems() {
        return JSON.parse(localStorage.getItem("LocalWishListItems"));
    }
    toggle() {
        this.forceUpdate();
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            document.getElementById("site-header").setAttribute("class", "site-header header-style-menu-center is-sticky");
        } else {
            document.getElementById("site-header").setAttribute("class", "site-header header-style-menu-center");
        }
    }
    ShowCart() {
        if (this.state.CartHide == true) {
            let elm = document.getElementById("DivCartContent");
            if (elm != null) {
                document.getElementById("DivCartContent").setAttribute("style", "display:block");
                this.state.CartHide = false;
            }
        }
    }
    HideCart() {
        let elm = document.getElementById("DivCartContent");
        if (elm != null) {
            document.getElementById("DivCartContent").setAttribute("style", "display:none");
            this.state.CartHide = true;
        }
    }
    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    onClickClassAdd(pages) {
        if (this.state.classset != pages) {
            this.setState({
                ...this.state,
                classset: pages
            })
        } else {
            if (Object.keys(this.state.classset).length == 0) {
                this.setState({
                    ...this.state,
                    classset: pages
                })
            } else {
                this.setState({
                    ...this.state,
                    classset: ''
                })
            }
        }
    }
    OpenSubmenuOpen(id) {
        let elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right show")
        }
    }
    OpenSubmenuClose(id) {
        let elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right")
        }
    }

    render() {
        if (this.state.timeout == true) {
            setTimeout(function () {
                this.setState({timeout: false});
            }.bind(this), 2000);  // wait 5 seconds, then reset to false
        }
        return (
            <header className="site-header header-style-menu-center" id="site-header">
                {this.state.timeout == false ?
                    <div>
                        <div className="header-main header-main-bg-color-default">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg={12}>
                                        <div className="row align-items-center justify-content-md-center">
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="logo-wrapper">
                                                    <Link href={'/'} to="/">
                                                        <img className="img-fluid" src={logo} alt="logo"/>
                                                    </Link>
                                                </div>
                                                <div className="clearfix"/>
                                            </Col>
                                            <div className="col" id="mainMenu">
                                                <div className="header-nav header-nav-bg-color-default">
                                                    <div className="header-nav-wrapper">
                                                        <Container>
                                                            <Row>
                                                                <div className="col-12">
                                                                    <div className="primary-nav">
                                                                        <div className="primary-nav-wrapper">
                                                                            <nav className="mega-menu">
                                                                                <div className="menu-list-items">
                                                                                    <Navbar light expand="md"
                                                                                            class="front_menu">
                                                                                        <NavbarToggler
                                                                                            onClick={this.toggle}/>
                                                                                        <Collapse
                                                                                            isOpen={this.state.isOpen}
                                                                                            navbar>
                                                                                            {navLinks.map((navLink, index) => (
                                                                                                <Nav className="ml-auto"
                                                                                                     navbar>
                                                                                                    {(navLink.type && navLink.type === 'subMenu') ?
                                                                                                        <Fragment>
                                                                                                            <UncontrolledDropdown
                                                                                                                nav
                                                                                                                inNavbar
                                                                                                                onMouseEnter={() => this.OpenSubmenuOpen(`submenu_${index}`)}
                                                                                                                onMouseLeave={() => this.OpenSubmenuClose(`submenu_${index}`)}>
                                                                                                                <Link
                                                                                                                    aria-haspopup="true"
                                                                                                                    to={navLink.path}
                                                                                                                    className="dropdown-toggle nav-link"
                                                                                                                    aria-expanded="true"> {navLink.menu_title}</Link>
                                                                                                                <DropdownMenu
                                                                                                                    right
                                                                                                                    id={`submenu_${index}`}>

                                                                                                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                                                        <DropdownItem
                                                                                                                            tag={Link}
                                                                                                                            to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                                                                    ))}
                                                                                                                </DropdownMenu>
                                                                                                            </UncontrolledDropdown>

                                                                                                        </Fragment>
                                                                                                        :
                                                                                                        <Fragment>
                                                                                                            <NavItem>
                                                                                                                <NavLink
                                                                                                                    href={navLink.path}><i
                                                                                                                    className="fa fa-home"/> {navLink.menu_title}
                                                                                                                </NavLink>
                                                                                                            </NavItem>

                                                                                                        </Fragment>
                                                                                                    }
                                                                                                </Nav>
                                                                                            ))}
                                                                                        </Collapse>
                                                                                    </Navbar>
                                                                                </div>
                                                                            </nav>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </div>
                                            </div>
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="header-nav-right-wrapper">
                                                    <div className="ciya-tools">
                                                        <div className="ciya-tools-wrapper">
                                                            <ul className="ciya-tools-actions">
                                                                <li className="ciya-tools-action ciya-tools-cart">
                                                                    {
                                                                        (this.ReadCartItems() == null || this.ReadCartItems().length === 0) ?
                                                                            <Link className="cart-link" to="#" onClick={() => this.ShowCart()} >
                                                                                <span className="cart-icon"><i className="glyphicon glyphicon-shopping-cart" /></span>
                                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                            </Link>

                                                                            :

                                                                            <Link className="cart-link" to="/ShopingCart" onClick={() => this.ShowCart()} >
                                                                                <span className="cart-icon"><i className="glyphicon glyphicon-shopping-cart" /></span>
                                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                            </Link>

                                                                    }
                                                                    {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                                                        <div className="cart-contents"
                                                                             id="DivCartContent">
                                                                            <div
                                                                                className="widget ciyashop widget-shopping-cart">
                                                                                <div
                                                                                    className="widget-shopping-cart-content">
                                                                                    <div
                                                                                        className="pgs-product-list-widget-container has-scrollbar">
                                                                                        <ul className="ciyashop-mini-cart cart-list">
                                                                                            {this.ReadCartItems().map((CartItem, index) => (
                                                                                                <li className="ciya-mini-cart-item">
                                                                                                    <Link
                                                                                                        onClick={() => this.removeFromCart(index)}
                                                                                                        id={`Product_${CartItem.ProductID}`}
                                                                                                        className="remove remove_from_cart_button"
                                                                                                        to={"#"}>×</Link>
                                                                                                    <div
                                                                                                        className="media">
                                                                                                        <Link
                                                                                                            to="#"><img
                                                                                                            width={60}
                                                                                                            height={76}
                                                                                                            src={CartItem.ProductImage}
                                                                                                            className="img-fluid"
                                                                                                            alt/></Link>
                                                                                                        <div
                                                                                                            className="media-body">
                                                                                                            <Link to="#"
                                                                                                                  className="product-title">{CartItem.ProductName}</Link>
                                                                                                            <span
                                                                                                                className="quantity">{CartItem.Qty} × <span
                                                                                                                className="woocs-special_price_code"><span
                                                                                                                className="ciya-Price-amount amount">{CartItem.Rate}</span><span
                                                                                                                className="ciya-Price-currencySymbol"> đ</span></span></span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            ))}

                                                                                        </ul>
                                                                                    </div>
                                                                                    <p className="ciyashop-mini-cart__total total">
                                                                                        <strong>Tổng:</strong> <span
                                                                                        className="woocs_special_price_code"><span
                                                                                        className="ciyashop-Price-amount amount"> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}<span
                                                                                        className="ciyashop-Price-currencySymbol"> đ</span></span></span>
                                                                                    </p>
                                                                                    <p className="ciyashop-mini-cart__buttons buttons">
                                                                                        <Link
                                                                                            onClick={() => this.HideCart()}
                                                                                            to="/ShopingCart"
                                                                                            className="button wc-forward">Giỏ hàng</Link>
                                                                                        <Link
                                                                                            onClick={() => this.HideCart()}
                                                                                            to="/CheckOut"
                                                                                            className="button checkout wc-forward">Thanh Toán</Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        :
                                                                        <div className="cart-contents"
                                                                             id="DivCartContent">
                                                                            <div
                                                                                className="widget ciyashop widget-shopping-cart">
                                                                                <div
                                                                                    className="widget-shopping-cart-content">
                                                                                    <p className="ciyashop-mini-cart__total total">
                                                                                        <img
                                                                                            src={require(`../../assets/images/empty-cart.png`)}
                                                                                            className="img-fluid mr-3"/>
                                                                                        <strong>{i18n.t('emptyCart')}</strong>
                                                                                        <span
                                                                                            className="woocs_special_price_code"><span
                                                                                            className="ciyashop-Price-amount amount"><span
                                                                                            className="ciyashop-Price-currencySymbol"></span> </span></span>
                                                                                    </p>


                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </li>
                                                                {/*<li className="ciya-tools-action ciya-tools-wishlist">*/}
                                                                {/*    <Link to="/wishlist"><i*/}
                                                                {/*        className="glyph-icon pgsicon-ecommerce-like"/>*/}
                                                                {/*        <span*/}
                                                                {/*            className="wishlist ciyashop-wishlist-count"> {this.ReadWishListItems() == null ? 0 : this.ReadWishListItems().length} </span>*/}
                                                                {/*    </Link>*/}
                                                                {/*</li>*/}
                                                                <li className="ciya-tools-action ciya-tools-search">
                                                                    <Link to="/shop"><i
                                                                        className="fa fa-search"/></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Navbar color="faded" light>
                                                <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                                                <Collapse isOpen={!this.state.collapsed} navbar>
                                                    <Nav className="ml-auto" navbar>
                                                        {navLinks.map((navLink, index) => (
                                                            <li className={`nav-item ${(this.state.classset == navLink.menu_title) ? 'show' : ''}`}>
                                                                {(navLink.type && navLink.type === 'subMenu') ?
                                                                    <Fragment>
                                                                        <Link href="#" to={'/'} className="nav-link"
                                                                              onClick={() => this.onClickClassAdd(navLink.menu_title)}>{navLink.menu_title}</Link>
                                                                        <ul className={(this.state.classset == navLink.menu_title) ? 'showcollapsed' : 'submenu'}>
                                                                            {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                <li className={'nav-item active'}
                                                                                    toggle={false}>
                                                                                    <Link className="nav-link"
                                                                                          onClick={() => this.closeNavbar()}
                                                                                          to={subNavLink.path}>{subNavLink.menu_title}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </Fragment>
                                                                    :
                                                                    <Fragment>
                                                                        <NavItem>
                                                                            <Link to={navLink.path}
                                                                                  className="nav-admin-link">{navLink.menu_title}</Link>
                                                                        </NavItem>

                                                                    </Fragment>
                                                                }
                                                            </li>
                                                        ))}
                                                    </Nav>
                                                </Collapse>
                                            </Navbar>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <div className="mobile-menu" id="mobileMenu"/>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>

                    :

                    <div id="preloader">
                        <Loader
                            type="Puff"
                            color="#04d39f"
                            height="100"
                            width="100"
                        />
                    </div>
                }
            </header>
        )
    }
}

export default Header
