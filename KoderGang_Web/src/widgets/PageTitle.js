
/**
 * Page title component
 */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

function PageTitle(props) {
   return (
      <Col>
      <div className="intro-title-inner">
      <h1>{props.title}</h1>
      </div>
      <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
          <li className="home">
              <span className="item-element">
              <Link className="bread-link bread-home" to="/">Home</Link>
              </span>
          </li>
          <li><span className="item-element">{props.title}</span></li>
      </ul>
      </Col>
   )
}

export default PageTitle;