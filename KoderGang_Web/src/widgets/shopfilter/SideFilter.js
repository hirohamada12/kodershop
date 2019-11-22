/**
 * Shop Page Side Bar Filter
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {uniqueCategory, uniqueColors, uniqueMinMaxPrice, uniqueSizes} from '../../services';
import {categoryValue, colorValue, priceValue, searchValue, sizeValue} from '../../actions/filter';


class SideFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SearchValue: ''
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            SearchValue: ''
        });
        this.props.searchValue('');
        this.nameInput.focus();
    }

    onClickColorFilter = (event, colors) => {
        let index = colors.indexOf(event.target.value);
        if (event.target.checked) {
            colors.push(event.target.value);
        } else {
            colors.splice(index, 1);
        }
        this.props.colorValue(colors)
    };

    onClickCategoryFilter(event, categorys) {
        let index = categorys.indexOf(event.target.value);
        if (event.target.checked) {
            categorys.push(event.target.value);
        } else {
            categorys.splice(index, 1);
        }
        console.log(categorys);
        this.props.categoryValue(categorys);
    }

    onClickSizeFilter(event, sizes) {
        let index = sizes.indexOf(event.target.value);
        if (event.target.checked) {
            sizes.push(event.target.value);
        } else {
            sizes.splice(index, 1);
        }
        this.props.sizeValue(sizes);
    }

    SearchTextchange(SearchText) {
        this.setState({
            ...this.state,
            SearchValue: SearchText.target.value
        });
        this.props.searchValue(SearchText.target.value);
    }

    render() {
        const sizeFilterValues = this.props.filters.size;
        const categoryFilterValues = this.props.filters.category;
        const colorsFilterValues = this.props.filters.color;

        if (this.props.filters.value.max > 10000000) {
            this.props.filters.value.max = 10000000;
        }
        if (this.props.filters.value.min < 100000) {
            this.props.filters.value.min = 100000;
        }
        return (
            <div>
                <div className="widget">
                    <h4 className="widget-title">Tìm Kiếm</h4>
                    <input type="text" ref={(input) => {
                        this.nameInput = input;
                    }} className="form-control" value={this.state.SearchValue}
                           onChange={this.SearchTextchange.bind(this)} placeholder="Tìm Kiếm Sản Phẩm"/>
                </div>
                <div className="widget widget_price_filter">
                    <h4 className="widget-title">Giá</h4>
                    <div classs="shop-filter shop-filter-product-price widget_price_filter">
                        <div className="shop-filter-wrapper">

                            <div className="price_slider_wrapper">
                                <InputRange
                                    maxValue={this.props.prices.max}
                                    minValue={this.props.prices.min}
                                    value={this.props.filters.value}
                                    onChange={value => this.props.priceValue({value})}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Màu sắc</h4>
                    <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '210px'}}>
                        <ul className="pgs-widget-layered-nav-list" tabIndex={0} style={{right: '-17px'}}>
                            {this.props.colors.map((color, index) => {
                                return (
                                    <div className="form-check pgs-filter-checkbox" key={index}>
                                        <input type="checkbox"
                                               onClick={(e) => this.onClickColorFilter(e, colorsFilterValues)}
                                               value={color}
                                               defaultChecked={colorsFilterValues.includes(color) ? true : false}
                                               className="form-check-input" id={color}/>
                                        <label className="form-check-label"
                                               htmlFor={color}>{color}</label>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Danh Mục</h4>
                    <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '215px'}}>
                        {this.props.categorys.map((category, index) => {
                            return (
                                <div className="form-check pgs-filter-checkbox" key={index}>
                                    <input type="checkbox"
                                           onClick={(e) => this.onClickCategoryFilter(e, categoryFilterValues)}
                                           value={category}
                                           defaultChecked={categoryFilterValues.includes(category) ? true : false}
                                           className="form-check-input" id={category}/>
                                    <label className="form-check-label"
                                           htmlFor={category}>{category}</label>
                                </div>)
                        })}
                    </div>
                </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Kích cỡ</h4>
                    <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '215px'}}>

                        {this.props.sizes.map((size, index) => {
                            return (

                                <div class="form-check pgs-filter-checkbox">
                                    <input type="checkbox" onClick={(e) => this.onClickSizeFilter(e, sizeFilterValues)}
                                           value={size} defaultChecked={sizeFilterValues.includes(size) ? true : false}
                                           class="form-check-input" id={size}/>
                                    <label class="form-check-label" htmlFor={size}>{size}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = state => ({
    categorys: uniqueCategory(state.data.products),
    sizes: uniqueSizes(state.data.products),
    colors: uniqueColors(state.data.products),
    prices: uniqueMinMaxPrice(state.data.products),
    filters: state.filters
});
export default connect(
    mapDispatchToProps,
    {categoryValue, sizeValue, colorValue, priceValue, searchValue}
)(SideFilter);

