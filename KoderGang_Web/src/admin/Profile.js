/**
 *  Admin Profile Page
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import Adminsitebar from './Adminsitebar';
import AdminProfileDetail from '../widgets/AdminProfileDetail';
import Common1 from '../common/DefaultCommon';
import Constants from "../common/Constants";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            userData: JSON.parse(localStorage.getItem(Constants.USER_DATA))
        })
    }

    render() {
        const Profile = Common1['0']['profile'];
        return (
            <div className="section-ptb">
                <Container>
                    <AdminProfileDetail fullname={this.state.userData.fullname}/>
                    <Row>
                        <Adminsitebar/>
                        <Col lg={9} className="mt-4 mt-lg-0">
                            <Row>
                                <Col lg={12}>
                                    <div className="woocommerce-Address">
                                        <div className="woocommerce-Address-title">
                                            <h5 class="mb-0">Thông tin</h5>
                                            <Link class="edit" to="/admin/Profileedit">sửa</Link>
                                        </div>
                                        <div className="woocommerce-Address-info mt-4">
                                            <ul class="list-unstyled mb-0">
                                                <li><span>Tên: </span><strong>{this.state.userData.fullname}</strong></li>
                                                <li><span>Tên Đang Nhập: </span><strong>{this.state.userData.username}</strong></li>
                                                <li><span>Giới Tính: </span><strong>Nam</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Profile;
