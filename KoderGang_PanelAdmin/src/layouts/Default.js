import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({children, noNavbar, noFooter, sidebarHidden}) => (
  <Container fluid>
    <Row>
      {sidebarHidden ? '' : <MainSidebar/>}
      <Col
        className="main-content p-0"
        lg={{size: 10, offset: 2}}
        md={{size: 9, offset: 3}}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar/>}
        {children}
        {!noFooter && <MainFooter/>}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
  sidebarHidden: false
};

export default DefaultLayout;