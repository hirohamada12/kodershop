/**
 * Business Schedule Page
 */
import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';


class Businessschedule extends Component {
    render() {
        return (
            <Row>
                <Col md={4} className="mb-4 mb-md-0">
                    <div
                        className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                            <div className="ciyashop_info_box-icon">
                                <div className="ciyashop_info_box-icon-wrap">
                                    <div className="ciyashop_info_box-icon-outer">
                                        <div className="ciyashop_info_box-icon-inner text-dark">
                                            <i className="fa fa-clock-o"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box-content">
                                <div className="ciyashop_info_box-content-wrap">
                                    <div className="ciyashop_info_box-content-inner">
                                        <h4 className="ciyashop_info_box-title">
                                            Giờ Làm Việc </h4>
                                        <div className="ciyashop_info_box-description">
                                            <p className="mb-1">Nhóm hỗ trợ của chúng tôi có sẵn từ</p>
                                            <p><strong>Thứ 2 đến Thứ 6</strong> : 8h sáng - 10h tối (GMT +7)<br/>
                                                <strong>Thứ 7, Chủ nhật</strong> : Nghỉ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                    <div
                        className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                            <div className="ciyashop_info_box-icon">
                                <div className="ciyashop_info_box-icon-wrap">
                                    <div className="ciyashop_info_box-icon-outer">
                                        <div className="ciyashop_info_box-icon-inner text-dark">
                                            <i className="fa fa-life-ring"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box-content">
                                <div className="ciyashop_info_box-content-wrap">
                                    <div className="ciyashop_info_box-content-inner">
                                        <h4 className="ciyashop_info_box-title">
                                            Trung tâm hỗ trợ </h4>
                                        <div className="ciyashop_info_box-description">
                                            <p>Chúng tôi có sẵn 24x7 trực tuyến.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div
                        className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                            <div className="ciyashop_info_box-icon">
                                <div className="ciyashop_info_box-icon-wrap">
                                    <div className="ciyashop_info_box-icon-outer">
                                        <div className="ciyashop_info_box-icon-inner text-dark">
                                            <i className="fa fa-info-circle"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ciyashop_info_box-content">
                                <div className="ciyashop_info_box-content-wrap">
                                    <div className="ciyashop_info_box-content-inner">
                                        <h4 className="ciyashop_info_box-title">
                                            Một số thông tin </h4>
                                        <div className="ciyashop_info_box-description">
                                            <p className="mb-1">Đổi Trả Hàng</p>
                                            <p><strong>Thứ 2 - Thứ 6</strong> : 9h sáng (GMT +7)<br/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        )
    }
}

export default Businessschedule;

