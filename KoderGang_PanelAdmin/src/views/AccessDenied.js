import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class AccessDenied extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4" style={{color: '#ff0000'}}>Access Denied</h1>
                <p className="text-muted float-left">You don't have permission to access this page.<br /><a href="/">← Go home</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AccessDenied;
