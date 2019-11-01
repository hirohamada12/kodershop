/**
 * Shop Page Side Bar Filter
 */
import React , {Component} from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {getuniqueCategory,getuniqueSizes,getuniqueColors,getuniqueMinMaxPrice} from '../../services';
import {filteredCategory, filterSize,filterColor , filterPrice,filterSearch} from '../../actions';


class SideFilter extends Component {

    constructor(props) {
        super(props);
        this.state={
            SearchValue:''
        }
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            SearchValue:''
        })
        this.props.filterSearch('');

        this.nameInput.focus();
    }
    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    colorHandle(event, colors){
        var index = colors.indexOf(event.target.value);
        if (event.target.checked)
            colors.push(event.target.value);
        else
            colors.splice(index, 1);

        this.props.filterColor(colors)
    }

    clickBrandHendle(event, categorys) {

        var index = categorys.indexOf(event.target.value);
        if (event.target.checked)
            categorys.push(event.target.value);
        else
            categorys.splice(index, 1);

        this.props.filteredCategory(categorys);
    }

    clickSizesHendle(event, sizes) {
        var index = sizes.indexOf(event.target.value);
        if (event.target.checked)
            sizes.push(event.target.value);
        else
            sizes.splice(index, 1);

        this.props.filterSize(sizes);
    }
    SearchTextchange(SearchText)
    {
        this.setState({
            ...this.state,
            SearchValue:SearchText.target.value
        })
        this.props.filterSearch(SearchText.target.value);
    }

    render(){
       const filterSizes = this.props.filters.size;
       const filteredCategorys = this.props.filters.category;
       const filteredColors = this.props.filters.color;

        if(this.props.filters.value.max > 2000)
        {
            this.props.filters.value.max = 2000;
        }
       return (
           <div>
                <div className="widget">
                <h4 className="widget-title">Search</h4>
                    <input type="text" ref={(input) => { this.nameInput = input; }}  className="form-control"  value={this.state.SearchValue}  onChange={this.SearchTextchange.bind(this)} placeholder="Search a Product" />
                </div>
                <div className="widget widget_price_filter">
                    <h4 className="widget-title">Filter by Price</h4>
                    <div classs="shop-filter shop-filter-product-price widget_price_filter">
                        <div className="shop-filter-wrapper">

                        <div className="price_slider_wrapper">
                            <InputRange
                                maxValue={this.props.prices.max}
                                minValue={this.props.prices.min}
                                value={this.props.filters.value}
                                onChange={value => this.props.filterPrice({ value })} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Filter by Color</h4>
                    <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '210px'}}>
                        <ul className="pgs-widget-layered-nav-list" tabIndex={0} style={{right: '-17px'}}>

                         {this.props.colors.map((color, index) => {
                                 return (
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                            <input type="checkbox" onClick={(e) => this.colorHandle(e,filteredColors)} value={color} defaultChecked={filteredColors.includes(color)? true : false}  className="custom-control-input" id={color} />
                                            <label className="custom-control-label"
                                                htmlFor={color}>{color}</label>
                                        </div>
                                    )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Product Categories</h4>
                        <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '215px'}}>
                         {this.props.categorys.map((category, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickBrandHendle(e,filteredCategorys)} value={category} defaultChecked={filteredCategorys.includes(category)? true : false}  className="custom-control-input" id={category} />
                                                    <label className="custom-control-label"
                                                           htmlFor={category}>{category}</label>
                                                </div> )
                            })}
                    </div>
                 </div>
                <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                    <h4 className="widget-title">Filter by Size</h4>
                    <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{height: '215px'}}>

                        {this.props.sizes.map((size, index) => {
                            return (

                                    <div class="custom-control custom-checkbox">
                                        <input  type="checkbox" onClick={(e) => this.clickSizesHendle(e, filterSizes)} value={size}  defaultChecked={filterSizes.includes(size)? true : false}  class="custom-control-input" id={size} />
                                        <label class="custom-control-label" htmlFor={size}>{size}</label>
                                    </div>
                                )
                            })}
                    </div>
                 </div>
            </div>
       )
    }
}

const mapStateToProps = state => ({
    categorys: getuniqueCategory(state.data.products),
    sizes: getuniqueSizes(state.data.products),
    colors: getuniqueColors(state.data.products),
    prices: getuniqueMinMaxPrice(state.data.products),
    filters: state.filters
})
export default connect(
    mapStateToProps,
    {filteredCategory,filterSize,filterColor,filterPrice,filterSearch}
)(SideFilter);

