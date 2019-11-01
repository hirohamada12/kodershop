/**
 * About Banner
 */
import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

class AboutBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: false};
    }

    getMoreTextDiv() {
        if (this.state.showText) {
            return <p>Được thành lập bởi 3 thành viên chúng tôi mang lại những sản phẩm chất lượng nhất.
                Sự hài lòng của khách hàng được đặt lên hàng đầu</p>;
        } else {
            return null;
        }
    }

    render() {
        let expandedDiv = this.getMoreTextDiv();
        return (
            <Row className="section-ptb align-items-center">
                <Col md={6} className="order-md-1 mb-4 mb-md-0">
                    <div className="single_image-wrapper">
                        <img src={require(`../assets/images/about.png`)}
                             className="attachment-full img-fluid" alt/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-wrapper">
                        <span>Tìm hiểu thêm</span>
                    </div>
                    <div className="section-title mb-4">
                        <h2 className="title text-left">KoderGang</h2>
                        <div className="text-wrapper">
                            <p>Chúng tôi là Koder Gang</p>
                            {expandedDiv}
                        </div>
                    </div>
                    <div className="ciyashop_button_wrapper ciyashop_button_width_default">
                        <div className="inline_hover ciyashop_button_link ciyashop_button_size_medium button-underline">
                            <a style={{cursor: "pointer"}} className="inline_hover"
                               onClick={() => this.setState({showText: !this.state.showText})}> {(this.state.showText) ? "Ẩn.." : "Xem thêm.."} </a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default AboutBanner;
