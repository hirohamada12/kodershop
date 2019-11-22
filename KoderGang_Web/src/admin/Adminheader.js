/**
 *  Admin Header
 */
import React, {Component} from 'react';
import {
    Col,
    Collapse,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    Row,
    UncontrolledDropdown
} from 'reactstrap';
import profile from '../assets/images/img-02.jpg';
import logo from '../assets/images/Logo.png';
import {Link} from 'react-router-dom';
import Common from '../common/DefaultCommon';
import Constants from "../common/Constants";
import {Cookies} from "react-cookie";

const cookie = new Cookies();

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modal1: false,
            dropdownOpen: false,
            isOpen: false,
            userData: {}
        };
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
    }

    toggle2() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggle3() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    Changeclass(val) {
        var removeelems = document.getElementsByClassName("nav-item");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });

        if (val === "report") {
            document.querySelector(".report").classList.add("active");
        }
        if (val === "invoice") {
            document.querySelector(".invoice").classList.add("active");
        }
        if (val === "category") {
            document.querySelector(".category").classList.add("active");
        }
        if (val === "color") {
            document.querySelector(".color").classList.add("active");
        }
        if (val === "size") {
            document.querySelector(".size").classList.add("active");
        }
        if (val === "profile") {
            document.querySelector(".profile").classList.add("active");
        }
        if (val === "backhome") {
            document.querySelector(".backhome").classList.add("active");
        }
    }

    componentWillMount() {
        this.setState({
            userData: JSON.parse(localStorage.getItem(Constants.USER_DATA))
        })
    }

    signOut() {
        cookie.remove(Constants.TOKEN_LOGGED);
        cookie.remove(Constants.PERMISSION_KEY);
        window.open("/", "_self");
    }


    render() {
        const Profile = Common["0"]["profile"];
        return (
            <div className="admin-menu">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12}>
                            <div className="d-flex align-items-center positive-reletive">

                                <Link to="/"><img className="img-fluid logo" src={logo} alt="logo"/></Link>

                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2}
                                          className="profile-dropdown ml-auto">
                                    <DropdownToggle caret className="btn-white">
                                        <img className="img-fluid rounded-circle profile-img" src={profile}
                                             alt="profile"/>
                                        <div className="d-none d-sm-block">
                                            <h6 className="mb-0">{this.state.userData.fullname}</h6>
                                            <span className="text-dark">{this.state.userData.email}</span>
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => this.Changeclass('profile')} className="nav-link"
                                                      tag={Link} to="/admin/Profile"><i
                                            className="fa fa-user-circle-o"></i>Thông tin</DropdownItem>
                                        <DropdownItem onClick={() => {

                                            this.Changeclass('profile')
                                        }} className="nav-link"
                                                      tag={Link} to="/admin/Settings"><i className="fa fa-cog"></i>Cài
                                            Đặt Tài Khoản</DropdownItem>
                                        <DropdownItem onClick={() => this.signOut()} className="nav-link"
                                                      tag={Link} to="/"><i className="fa fa-sign-out"></i>Đăng
                                            Xuất</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <Navbar light expand="md" className="bg-white">
                                <NavbarToggler onClick={this.toggle3}/>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav navbar>
                                        <NavItem className="active report">
                                            <Link to="/admin/Reports" className="nav-link"
                                                  onClick={() => this.Changeclass('report')}><i
                                                className="fa fa-line-chart"></i>Báo Cáo</Link>
                                        </NavItem>
                                        <NavItem className="invoice">
                                            <Link to="/admin/Invoices" className="nav-link"
                                                  onClick={() => this.Changeclass('invoice')}><i
                                                className="fa fa-inbox"></i>Đơn Hàng</Link>
                                        </NavItem>
                                        <NavItem className="category">
                                            <Link to="/admin/Category" className="nav-link"
                                                  onClick={() => this.Changeclass('category')}><i
                                                className="fa fa-inbox"></i>Danh Mục</Link>
                                        </NavItem>
                                        <NavItem className="color">
                                            <Link to="/admin/Color" className="nav-link"
                                                  onClick={() => this.Changeclass('color')}><i
                                                className="fa fa-paint-brush"></i>Màu sắc</Link>
                                        </NavItem>
                                        <NavItem className="size">
                                            <Link to="/admin/Size" className="nav-link"
                                                  onClick={() => this.Changeclass('size')}><i
                                                className="fa fa-inbox"></i>Kích cỡ</Link>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                <i className="fa fa-shopping-cart"/>Sản Phẩm
                                            </DropdownToggle>
                                            <DropdownMenu left>
                                                <DropdownItem onClick={() => this.Changeclass('product')}
                                                              className="nav-link" tag={Link} to="/admin/Product"><i
                                                    className="fa fa-cart-plus"></i>Sản Phẩm</DropdownItem>
                                                <DropdownItem onClick={() => this.Changeclass('product')}
                                                              className="nav-link" tag={Link} to="/admin/product-add"><i
                                                    className="fa fa-cart-arrow-down"></i>Thêm Sản Phẩm</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <NavItem className="profile">
                                            <Link to="/admin/Profile" className="nav-link"
                                                  onClick={() => this.Changeclass('profile')}><i
                                                className="fa fa-user-circle-o"></i>Profile</Link>
                                        </NavItem>
                                        <NavItem className="backhome">
                                            <Link to="/" className="nav-link"
                                                  onClick={() => this.Changeclass('backhome')}><i
                                                className="fa fa-home"></i>Quay lại trang chủ</Link>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AdminHeader;
