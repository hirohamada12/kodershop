/**
 *  Contact Detail Page
 */
import React from 'react';
import {Col, Container, Row} from 'reactstrap';


function ContactDetail() {

    return (
        <Container>
            <Row>
                <Col sm={12} className="col-sm-12">
                    <div className="section-title text-center mb-2">
                        <h2 className="title">Hãy liên lạc với chúng tôi</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                    <div
                        className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
                        <div className="ciyashop_info_box_2-inner clearfix">
                            <div className="ciyashop_info_box_2-icon">
                                <div className="ciyashop_info_box_2-icon-wrap">
                                    <div className="ciyashop_info_box_2-icon-outer">
                                        <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="fa fa-map-marker"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box_2-content">
                                <div className="ciyashop_info_box_2-content-wrap">
                                    <div className="ciyashop_info_box_2-content-inner">
                                        <h6 className="ciyashop_info_box_2-title inline_hover">Location : </h6>
                                        <div className="ciyashop_info_box_2-content">
                                            <p>Keangnam Hanoi Landmark Tower</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div
                        className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
                        <div className="ciyashop_info_box_2-inner clearfix">
                            <div className="ciyashop_info_box_2-icon">
                                <div className="ciyashop_info_box_2-icon-wrap">
                                    <div className="ciyashop_info_box_2-icon-outer">
                                        <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="fa fa-phone"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box_2-content">
                                <div className="ciyashop_info_box_2-content-wrap">
                                    <div className="ciyashop_info_box_2-content-inner">
                                        <h6 className="ciyashop_info_box_2-title inline_hover">
                                            Điện Thoại : </h6>
                                        <div className="ciyashop_info_box_2-content">
                                            <p>0941958897</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div
                        className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left pb-0">
                        <div className="ciyashop_info_box_2-inner clearfix">
                            <div className="ciyashop_info_box_2-icon">
                                <div className="ciyashop_info_box_2-icon-wrap">
                                    <div className="ciyashop_info_box_2-icon-outer">
                                        <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="fa fa-envelope-o"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box_2-content">
                                <div className="ciyashop_info_box_2-content-wrap">
                                    <div className="ciyashop_info_box_2-content-inner">
                                        <h6 className="ciyashop_info_box_2-title inline_hover">Email : </h6>
                                        <div className="ciyashop_info_box_2-content">
                                            <p>anhvtn11@fpt.com.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )

}

export default ContactDetail;

