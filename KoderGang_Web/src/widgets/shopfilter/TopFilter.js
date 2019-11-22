/**
 * Shop Page Top Filter
 */
import React , {Component} from 'react';
import { Row, Col,Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import {sortValue,ratingValue} from '../../actions/filter';
import {getFilterProductsdata} from '../../services';
import { connect } from 'react-redux';
class TopFilter extends Component {

    componentDidMount()
    {
        let removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });
        let layoutstyle=localStorage.getItem('setLayoutStyle')
        if(layoutstyle == 'col-sm-6 col-xl-3 col-lg-4')
        {
            document.querySelector(".grid-4-column").classList.add("active");
        }
        else if(layoutstyle == 'col-sm-6')
        {
            document.querySelector(".grid-2-column").classList.add("active");
        }
        else if(layoutstyle == 'col-sm-12')
        {
            document.querySelector(".gridlist-toggle-list").classList.add("active");
            document.querySelector(".pgs-product-list").classList.remove("grid");
            document.querySelector(".pgs-product-list").classList.add("list");
        }
        else
        {
            document.querySelector(".grid-3-column").classList.add("active");
        }
    }
    // Grid List View Display
    GridListview(){
        let removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });
        document.querySelector(".gridlist-toggle-list").classList.add("active");
        document.querySelector(".pgs-product-list").classList.remove("grid");
        document.querySelector(".pgs-product-list").classList.add("list");
        localStorage.setItem('setLayoutStyle','col-sm-12')
        let elems = document.querySelector(".pgs-product-list").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-sm-12');
        });
    }

    // Change Col List On Click Grid List
    LayoutTwoView = (Size) =>{
        let removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });

        document.querySelector(".pgs-product-list").classList.remove("list");
        if(Size == "6")
        {
            document.querySelector(".grid-2-column").classList.add("active");
            localStorage.setItem('setLayoutStyle','col-sm-6')
        }
        else
        {
            document.querySelector(".grid-3-column").classList.add("active");
            localStorage.setItem('setLayoutStyle','col-sm-6 col-md-4')
        }

        if(!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            let elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-sm-'+Size);
            });
        }
    }
    LayoutViewFour = (Size) =>{
        let removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });
        document.querySelector(".pgs-product-list").classList.remove("list");
        if(Size === "3")
        {
            document.querySelector(".grid-4-column").classList.add("active");
            localStorage.setItem('setLayoutStyle','col-sm-6 col-xl-3 col-lg-4')
        }
        if(!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            let elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-sm-6');
                el.classList.add('col-xl-3');
                el.classList.add('col-lg-4');
            });
        }
    }
    LayoutViewThree = (Size) =>{
        let removeelems = document.getElementsByClassName("gridlist-button");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });
        document.querySelector(".pgs-product-list").classList.remove("list");
        if(Size === "4")
        {
            document.querySelector(".grid-3-column").classList.add("active");
            localStorage.setItem('setLayoutStyle','col-sm-6 col-md-4')
        }
        if(!document.querySelector(".pgs-product-list").classList.contains("list-view")) {
            let elems = document.querySelector(".pgs-product-list").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-sm-6');
                el.classList.add('col-md-4');
            });
        }
    };

    render() {
        const productlength=this.props.productlength;
        return (
            <Row>
                <Col>
                    {productlength > 0 ?
                        <p className="result-count">
                            Hiển thị 1–{productlength} trong  {this.props.products.length}
                        </p>
                        :
                        <p className="result-count">
                            Hiển thị 0 trong {this.props.products.length}
                        </p>
                    }
                    <div className="gridlist-toggle-wrap">
                        <div className="gridlist-button-wrap">
                            <div className="gridlist-toggle">
                                <Link  title="Grid view" className="gridlist-button grid-2-column" onClick={() => this.LayoutTwoView(6)} to={'#'}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="Grid view" className="gridlist-button grid-3-column active" onClick={() => this.LayoutViewThree(4)}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="Grid view" className="gridlist-button grid-4-column"  onClick={() => this.LayoutViewFour(3)}>
                                    <em>Grid view</em>
                                </Link>
                                <Link to="#" title="List view" className="gridlist-button gridlist-toggle-list" onClick={() => this.GridListview()} >
                                    <em>List view</em>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Form className="ordering">
                        <select name="orderby" className="orderby select2" onChange={(e) => this.props.ratingValue(e.target.value)} tabIndex={-1} aria-hidden="true">
                            <option value="" selected="selected">Đánh Giá</option>
                            <option value="5">5 Sao</option>
                            <option value="4">4 Sao</option>
                            <option value="3">3 Sao</option>
                            <option value="2">2 Sao</option>
                            <option value="1">1 Sao</option>
                        </select>
                    </Form>
                    <Form className="ordering">
                        <select name="orderby" className="orderby select2" onChange={(e) => this.props.sortValue(e.target.value)} tabIndex={-1} aria-hidden="true">
                            <option value=" " selected="selected">Lọc Theo</option>
                            <option value="NewProduct">Mới Nhất</option>
                            <option value="Pricehigh">Giá: Cap đến thấp</option>
                            <option value="Pricelow">Giá: Thấp đến cao</option>
                        </select>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps  = (state) => ({
    products: getFilterProductsdata(state.data, state.filters),
    filters: state.filters
});
export default connect(mapDispatchToProps, {sortValue,ratingValue})(TopFilter);


