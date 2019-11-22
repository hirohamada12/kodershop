import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.Checkscroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.Checkscroll);
    }

    Checkscroll() {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        if (scrollTop > 350) {
            if (document.getElementById("back-to-top") != null) {
                document.getElementById("back-to-top").setAttribute("style", "display:block");
            }
        } else {
            if (document.getElementById("back-to-top") != null) {
                document.getElementById("back-to-top").setAttribute("style", "display:none");
            }
        }

    }

    ClicktoTop() {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }

    render() {
        let backtotop = {display: 'none'};
        return (
            <div>
                <footer className="site-footer">
                    <div className="footer-wrapper">
                        <div className="footer-widgets-wrapper">
                            <div className="footer">
                                <Container>
                                    <Row>
                                        <div className="col-lg-3 col-md-6 footer-align-left">
                                            <div className="logo-wrapper widget">
                                                <p><Link to="/">
                                                    <img className="img-fluid"
                                                         src={require(`../../assets/images/Logo.png`)} alt="logo"/>
                                                </Link></p>
                                            </div>
                                            <div className="text-content">
                                                <p className="mb-3 mt-4">Chúng tôi mong muốn những khách hàng của
                                                    KoderShop luôn tự tin, trẻ trung và đầy lạc quan.
                                                    Thay đổi không ngừng nghỉ và tận tâm vì khách hàng sẽ là hai tôn chỉ
                                                    hoạt động lớn nhất của chúng tôi.</p>
                                                <p className="mb-4">Dress like you're already famous</p>
                                            </div>
                                            <div className="pgs-social-profiles mt-4">
                                                <div className="social-profiles-wrapper">
                                                    <div
                                                        className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                                                        <div className="social-profiles">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com" title="Facebook"
                                                                       target="_blank"><i
                                                                    className="fa fa-facebook"/></a></li>
                                                                <li><a href="https://twitter.com" title="Twitter"
                                                                       target="_blank"><i
                                                                    className="fa fa-twitter"/></a></li>
                                                                <li><a href="https://google.com/" title="Google"
                                                                       target="_blank"><i className="fa fa-google"/></a>
                                                                </li>
                                                                {/*<li><a href="https://vimeo.com/" title="Vimeo"*/}
                                                                {/*       target="_blank"><i className="fa fa-vimeo"/></a>*/}
                                                                {/*</li>*/}
                                                                {/*<li><a href="https://in.pinterest.com/"*/}
                                                                {/*       title="Pinterest" target="_blank"><i*/}
                                                                {/*    className="fa fa-pinterest"/></a></li>*/}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget">
                                                <h4 className="footer-title title">Liên kết</h4>
                                                <div className="menu-useful-links-container">
                                                    <ul className="menu">
                                                        <li className="menu-item active"><Link to="/">Trang chủ</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/aboutus">Về Chúng
                                                            Tôi</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/shop">Mua Sắm</Link></li>
                                                        <li className="menu-item"><Link to="/Contactus">Liên Hệ</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/">Chính sách bảo mật</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget mt-4 mt-lg-0">
                                                <h4 className="footer-title title">Thông Tin</h4>
                                                <div className="menu-useful-links-container">
                                                    <ul className="menu">
                                                        <li className="menu-item active"><Link to="/">Xu hướng thời
                                                            trang</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/">Thời trang đường
                                                            phố</Link></li>
                                                        <li className="menu-item"><Link to="/">Thời trang Nữ</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/">Thời trang Nam</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/">Phong cách mới</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-align-left">
                                            <div className="pgs-contact-widget widget mt-4 mt-lg-0">
                                                <h4 className="footer-title title">Liên Hệ</h4>
                                                <div className="footer-address">
                                                    <ul>
                                                        <li><i className="fa fa-map-marker"/><span>Tầng 21 Toàn nhà KeangNam, LandMark 72 Hà Nội</span>
                                                        </li>
                                                        <li className="pgs-contact-email"><i
                                                            className="fa fa-envelope-o"/><span>kodergang@kodergang.com</span>
                                                        </li>
                                                        <li><i className="fa fa-phone"/><span>098999999</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="widget pgs-newsletter-widget">
                                                <h4 className="footer-title title">Gửi mail cho chúng tôi</h4>
                                                <div className="newsletter">
                                                    <div className="section-field">
                                                        <form className="newsletter_form">
                                                            <div className="input-area">
                                                                <input type="text"
                                                                       className="placeholder newsletter-email"
                                                                       name="newsletter_email"
                                                                       placeholder="Nhập email của bạn"/>
                                                            </div>
                                                            <div className="button-area">
                                        <span className="input-group-btn">
                                        <button className="btn btn-icon newsletter-mailchimp submit"
                                                type="button">Subscribe</button>
                                        </span>
                                                                <span
                                                                    className="newsletter-spinner spinimg-pgs_newsletter_widget_2"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        {/*<div className="footer-bottom-wrapper">*/}
                        {/*    <Container>*/}
                        {/*        <Row>*/}
                        {/*            <div className="col-12">*/}
                        {/*                <div className="footer-bottom">*/}
                        {/*                    <Row className="align-items-center">*/}
                        {/*                        <Col lg={6}>*/}
                        {/*                            <Row>*/}
                        {/*                                <div className="col-12">*/}
                        {/*                                    <div className="footer-content">*/}
                        {/*                                        CiyaShop Mobile app is Available now. Download it now on*/}
                        {/*                                        your favorite device and indulge in a seamless shopping*/}
                        {/*                                        experience.*/}
                        {/*                                    </div>*/}
                        {/*                                </div>*/}
                        {/*                            </Row>*/}
                        {/*                        </Col>*/}
                        {/*                        <Col lg={6}>*/}
                        {/*                            <div className="app-group row text-lg-right">*/}
                        {/*                                <Col md={4}>*/}
                        {/*                                    <div className="app-img">*/}
                        {/*                                        ảnh 1*/}
                        {/*                                        /!*<img src={require(`../../assets/images/appbtntext.png`)} className="img-fluid" alt />*!/*/}
                        {/*                                    </div>*/}
                        {/*                                </Col>*/}
                        {/*                                <Col md={8}>*/}
                        {/*                                    <Link to="/" className="apps-store-img">*/}
                        {/*                                        ảnh google store*/}
                        {/*                                        /!*<img src={require(`../../assets/images/google-play-img.png`)} className="img-fluid" alt />*!/*/}
                        {/*                                    </Link>*/}
                        {/*                                    <Link to="/" className="apps-store-img">*/}
                        {/*                                        ảnh app store*/}
                        {/*                                        /!*<img src={require(`../../assets/images/appstorebtn.png`)} className="img-fluid" alt />*!/*/}
                        {/*                                    </Link>*/}
                        {/*                                </Col>*/}
                        {/*                            </div>*/}
                        {/*                        </Col>*/}
                        {/*                    </Row>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </Row>*/}
                        {/*    </Container>*/}
                        {/*</div>*/}
                        <div className="site-info">
                            <div className="footer-widget">
                                <Container>
                                    <div className="row align-items-center">
                                        <Col md={6} className="float-left">
                                            <p> © Copyright 2019 <Link to="/">KoderShop</Link> All Rights Reserved.</p>
                                        </Col>
                                        <Col md={6} className="float-right">
                                            <div className="payments text-right">
                                                <img src={require(`../../assets/images/payments.png`)}
                                                     className="img-fluid" alt/>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="clearfix"/>
                                </Container>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Back to Top */}
                <div id="back-to-top" style={backtotop} onClick={this.ClicktoTop}>
                    <Link to={"/"} className="top arrow">
                        <i className="fa fa-angle-up"/>
                    </Link>
                </div>
            </div>
        )
    }
};
export default Footer;