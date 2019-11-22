/**
 * InterestingFacts Widget
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

function InterestingFacts() {

    return (
        <div className="section-wrapper section-ptb bg-gray">
                <div className="container">
                <Row>
                    <Col sm={12}>
                    <div className="section-title text-center">
                        <h2 className="font-bold title">Sự thật thú vị</h2>
                        <p className="text-center">Khám phá bộ sưu tập tốt nhất cho mùa thu của stylist Art. Với rất
                            quyến rũ, hiện đại và đam mê, bạn chắc chắn yêu thích bộ sưu tập này.</p>
                    </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={4} md={6}>
                    <div className="mb-4 mb-md-6 mt-4 mt-md-6 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-right ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-right info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-exchange" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    01 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                    Đổi Trả Miễn Phí </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Nếu bạn không thích nó bạn có thể đổi.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-4 mb-md-6 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-right ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-right info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-retweet" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    02 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                    Chính sách hoàn tiền trong 60 ngày </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Nếu bạn gặp lỗi với sản phẩm chúng tôi sẵn sàng hoàn tiền</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-4 mb-md-6 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-right ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-right info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-inbox" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    03 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                E-vouchers vào email </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Chúng tôi luôn gửi các vouchers vào email của bạn</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col sm={4} className="d-none d-lg-block">
                    <img src={require(`../assets/images/team/about-us-1.png`)} className="img-fluid" />
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="mb-4 mb-md-6 mt-0 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix left-info-icon-bottom">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-gift" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    04 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                    Quà tặng cao cấp </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Nếu bạn mua hàng trên 1 triệu đồng chúng tôi có món quà cho bạn</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-4 mb-md-6 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix left-info-icon-bottom">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-usd" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    05 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                Giá tốt nhất </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Chúng tôi muốn đảm bảo bạn nhận được những sản phẩm chất lượng và giá tốt nhất có thể</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-0 mb-md-6 ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-md ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix left-info-icon-bottom">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#04d39f', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-truck" style={{color: '#04d39f'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <div className="ciyashop_info_box-step-wrapper">
                                <span className="ciyashop_info_box-step">
                                    06 </span>
                                </div>
                                <h4 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                               Vận chuyển nhanh chóng </h4>
                                <div className="ciyashop_info_box-description">
                                <p>Chúng tôi vận chuyển một cách nhanh chóng</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </div>
            </div>
        )

    }

export default InterestingFacts;
