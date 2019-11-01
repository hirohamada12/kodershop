/**
 * Shop Page Top Filter
 */
import React, {Component} from 'react';
import {Col, Form, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {filterRating, filterSort} from '../../actions';
import {getVisibleproducts} from '../../services';
import {connect} from 'react-redux';

let MyProduct = [];

//import { identifier } from '@babel/types';
class TopFilter extends Component {

    componentDidMount() {
        var removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });
        let layoutstyle = localStorage.getItem('setLayoutStyle')
        if (layoutstyle == 'col-sm-6 col-xl-3 col-lg-4') {
            document.querySelector(".grid-4-column").classList.add("active");
        } else if (layoutstyle == 'col-sm-6') {
            document.querySelector(".grid-2-column").classList.add("active");
        } else if (layoutstyle == 'col-sm-12') {
            document.querySelector(".gridlist-toggle-list").classList.add("active");
            document.querySelector(".pgs-product-list").classList.remove("grid");
            document.querySelector(".pgs-product-list").classList.add("list");
        } else {
            document.querySelector(".grid-3-column").classList.add("active");
        }
    }

    // List View
    Listview() {
        var removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });

        document.querySelector(".gridlist-toggle-list").classList.add("active");
        document.querySelector(".pgs-product-list").classList.remove("grid");
        document.querySelector(".pgs-product-list").classList.add("list");
        localStorage.setItem('setLayoutStyle', 'col-sm-12')
        var elems = document.querySelector(".pgs-product-list").childNodes;
        [].forEach.call(elems, function (el) {
            el.className = '';
            el.classList.add('col-sm-12');
        });
    }

    // Layout Column View
    LayoutView = (colSize) => {
        var removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });

        document.querySelector(".pgs-product-list").classList.remove("list");
        if (colSize == "6") {
            document.querySelector(".grid-2-column").classList.add("active");
            localStorage.setItem('setLayoutStyle', 'col-sm-6')
        } else {
            document.querySelector(".grid-3-column").classList.add("active");
            localStorage.setItem('setLayoutStyle', 'col-sm-6 col-md-4')
        }

        if (!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            var elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function (el) {
                el.className = '';
                el.classList.add('col-sm-' + colSize);
            });
        }
    }
    LayoutViewFour = (colSize) => {
        var removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });
        document.querySelector(".pgs-product-list").classList.remove("list");
        if (colSize == "3") {
            document.querySelector(".grid-4-column").classList.add("active");
            localStorage.setItem('setLayoutStyle', 'col-sm-6 col-xl-3 col-lg-4')
        }
        if (!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            var elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function (el) {
                el.className = '';
                el.classList.add('col-sm-6');
                el.classList.add('col-xl-3');
                el.classList.add('col-lg-4');
            });
        }
    }
    LayoutViewThree = (colSize) => {
        var removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });
        document.querySelector(".pgs-product-list").classList.remove("list");
        if (colSize == "4") {
            document.querySelector(".grid-3-column").classList.add("active");
            localStorage.setItem('setLayoutStyle', 'col-sm-6 col-md-4')
        }
        if (!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            var elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function (el) {
                el.className = '';
                el.classList.add('col-sm-6');
                el.classList.add('col-md-4');
            });
        }
    }

    render() {
        const productlength = this.props.productlength;
        return (
            <Row>
                <Col>
                    {productlength > 0 ?
                        <p className="result-count">
                            Showing 1–{productlength} results of {MyProduct.length}
                        </p>
                        :
                        <p className="result-count">
                            Showing 0 results of {MyProduct.length}
                        </p>
                    }
                    <div className="gridlist-toggle-wrap">
                        <div className="gridlist-button-wrap">
                            <div className="gridlist-toggle">
                                <Link title="Grid view" className="gridlist-button grid-2-column"
                                      onClick={() => this.LayoutView(6)}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="Grid view" className="gridlist-button grid-3-column active"
                                      onClick={() => this.LayoutViewThree(4)}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="Grid view" className="gridlist-button grid-4-column"
                                      onClick={() => this.LayoutViewFour(3)}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="List view" className="gridlist-button gridlist-toggle-list"
                                      onClick={() => this.Listview()}>
                                    <em>List view</em>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Form className="ordering">
                        <select name="orderby" className="orderby select2"
                                onChange={(e) => this.props.filterRating(e.target.value)} tabIndex={-1}
                                aria-hidden="true">
                            <option value="" selected="selected">Any Rating</option>
                            <option value="5">5 Star</option>
                            <option value="4">4 Star</option>
                            <option value="3">3 Star</option>
                            <option value="2">2 Star</option>
                            <option value="1">1 Star</option>
                        </select>
                    </Form>
                    <Form className="ordering">
                        <select name="orderby" className="orderby select2"
                                onChange={(e) => this.props.filterSort(e.target.value)} tabIndex={-1}
                                aria-hidden="true">
                            <option value=" " selected="selected">Default sorting</option>
                            <option value="Newest">Newest Items</option>
                            <option value="HighToLow">Price: High to Low</option>
                            <option value="LowToHigh">Price: Low to High</option>
                        </select>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort, filterRating})(TopFilter);


