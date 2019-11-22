/**
 * About Banner 2
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

function AboutBanner2() {

    return (
            <div className="section-wrapper section-ptb">
            <div className="container">
            <Row>
                <Col lg={5}>
                <img src={require(`../assets/images/team/about-us.jpg`)}  className="img-fluid"  alt={""}/>
                </Col>
                <Col lg={7} className="mt-4 mt-lg-0">
                <div className="section-title mb-3">
                    <h2 className="font-bold">Nhận biết chúng tôi tốt hơn.</h2>
                </div>
                <p>Chúng tôi là cửa hàng KoderGang. Cửa hàng của chúng tôi không chỉ là một nhà bán lẻ trực tuyến trung bình. Chúng tôi không chỉ bán sản phẩm chất lượng hàng đầu,
                    mà còn mang đến cho khách hàng trải nghiệm mua sắm trực tuyến tích cực. Hãy quên đi việc vật lộn để làm mọi thứ cùng một lúc chăm sóc gia đình.
                </p>
                <div className="ciyashop_list_wrapper mb-3">
                    <ul className="ciyashop_list list icon-list-type-none">
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="ciyashop-list-info">
                            Về cơ bản có sáu lĩnh vực quan trọng để đạt được thành tích cao hơn
                        </p>
                    </li>
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="ciyashop-list-info">
                            Điều đầu tiên cần nhớ về thành công là nó
                        </p>
                    </li>
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="ciyashop-list-info">
                            Niềm tin - tin vào bản thân và những người xung quanh
                        </p>
                    </li>
                    </ul>
                </div>
                <Row className="mt-4 pt-4 mt-sm-5 pt-sm-5 border-top no-gutters">
                    <Col sm={6} className="pr-2">
                    <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-sm ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-archive" style={{color: '#dbdbdb'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <h5 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                    Cửa hàng của chúng tôi </h5>
                                <div className="ciyashop_info_box-description">
                                <p>Nhưng cung cấp cho khách hàng của chúng tôi một trực tuyến tích cực.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col sm={6} >
                    <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-sm ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title mt-4 mt-sm-0">
                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                        <div className="ciyashop_info_box-icon">
                            <div className="ciyashop_info_box-icon-wrap">
                            <div className="ciyashop_info_box-icon-outer">
                                <div className="ciyashop_info_box-icon-inner" style={{borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-align-center" style={{color: '#dbdbdb'}} />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ciyashop_info_box-content">
                            <div className="ciyashop_info_box-content-wrap">
                            <div className="ciyashop_info_box-content-inner">
                                <h5 className="ciyashop_info_box-title" style={{color: '#323232'}}>
                                    Nhiệm vụ của chúng tôi </h5>
                                <div className="ciyashop_info_box-description">
                                <p>Tùy thuộc vào thiết bị bạn sử dụng để truy cập.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            </div>
        </div>


        )

    }

export default AboutBanner2;
