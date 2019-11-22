/**
 *  Page Not Found Page
 */
import React, { Component } from 'react';
import PageNotFoundImage from '../../assets/images/error-404-image.png';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Button } from 'reactstrap';

class PageNotFound extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="site-content">
                <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <Row className="intro-title align-items-center intro-section-center">
                            <Col>
                                <div className="intro-title-inner">
                                    <h1>404 Error</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="content-wrapper section-pt pb-6">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={7} className="text-center text-lg-left">
                                <div className="error404 no-results not-found">
                                    <div className="error-block clearfix">
                                        <h1 className="error-block-title">404</h1>
                                        <p className="error-block-subtitle">Oops ! Không tìm thấy trang.</p>
                                    </div>
                                    <div className="error-search-box">
                                        <p className="error-search-box-description">Không thể tìm thấy những gì bạn đang tìm kiếm? Dành một chút thời gian
                                            và thực hiện tìm kiếm bên dưới hoặc bắt đầu từ chúng tôi
                                            <Link className="error-search-box-description-link" to="/">
                                                &nbsp; Trang Chủ
                                            </Link>
                                        </p>
                                        <div className="fourofour-searchform">
                                            <form className="clearfix" id="searchform" action="">
                                                <label className="screen-reader-text" for="s">Tìm Kiếm:</label>
                                                <input type="text"  placeholder="Tìm kiếm trang"/>
                                                <Button className="search-button" value="Search" type="button"> <i className="fa fa-search"/>
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={5} className="d-none d-lg-block d-xl-block">
                                <div className="content-404-image">
                                    <img className="img-fluid" src={PageNotFoundImage}   alt="404 Image"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default PageNotFound;
