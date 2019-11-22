/**
 * Admin Profile Detail
 */
import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import adminprofile from '../assets/images/img-02.jpg';
import Common from '../common/DefaultCommon';

class AdminProfileDetail extends Component {
    render() {
        const Profile = Common['0']['profile'];
        return (
            <Row>
                <Col lg={12}>
                    <div className="admin-profile">
                        <div className="admin-profile-image">
                            <img className="img-fluid rounded-circle" src={adminprofile} alt="profile"/>
                        </div>
                        <div className="admin-profile-info">
                            <h6 className="mb-0">{this.props.fullname}</h6>
                            <span className="text-dark">kodershop@gmail.com</span>
                        </div>
                        {Profile.phoneno !== '' ?
                            <div className="admin-profile-number ml-auto">
                                <strong className="h2"> <i className="fa fa-phone-square pr-2"/>0941958897</strong>
                            </div>
                            :
                            null
                        }

                    </div>
                </Col>
            </Row>
        )
    }
}

export default AdminProfileDetail;
