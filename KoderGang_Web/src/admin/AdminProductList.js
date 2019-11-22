/**
 *  Admin Site Product Listing Page
 */
import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import AdminproductList from '../widgets/AdminProduct';
import Pagination from '../services/Pagination';
import ProductService from "../services/ProductService";
import {showMessage} from "../components/modal/Modal";

class AdminProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsearch: '',
            productList: [],
            currentProduct: [],
            currentPage: null,
            totalPages: null,
            cp_productList: [],
            IsDeleteProcess: false
        };
        this.service = new ProductService();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    UNSAFE_componentWillMount = async () => {
        this.onLoadProduct();
    };
    onLoadProduct = async () => {
        await this.service.getAll({}, async result => {
            this.setState({
                productList: result.data,
                cp_productList: result.data,
                currentProduct: result.data
            })
        })
    };

    onProductSearch(searchproduct) {

        if (searchproduct === '') {
            let curr_products = this.state.cp_productList.slice((this.state.currentPage - 1) * 12, ((this.state.currentPage - 1) * 12) + 12);
            this.setState({
                ...this.state,
                productsearch: searchproduct,
                productList: this.state.cp_productList,
                currentProduct: curr_products,
                totalRecords: this.state.cp_productList.length,
                IsDeleteProcess: true,
            });
            this.state.currentProduct = curr_products;
            this.forceUpdate();
            this.render();
        } else {
            let serachdata = this.state.cp_productList.filter((productname) => {
                if (searchproduct === searchproduct.toLowerCase()) {
                    let product = productname.name.toLowerCase().indexOf(searchproduct.toLowerCase()) > -1;
                    return (
                        product
                    )
                } else {
                    let product = productname.name.toUpperCase().indexOf(searchproduct.toUpperCase()) > -1;
                    return (
                        product
                    )
                }

            });
            let curr_products = null;
            if (serachdata.length > 12) {
                curr_products = serachdata.slice(0, 12);
            } else {
                curr_products = serachdata;
            }

            this.setState({
                ...this.state,
                productsearch: searchproduct,
                productList: serachdata,
                currentProduct: curr_products,
                totalRecords: searchproduct.length,
                IsDeleteProcess: false
            });
            this.state.currentProduct = curr_products;
            this.render();
        }
    }

    onPageChanged = data => {
        const {productList} = this.state;
        const {currentPage, totalPages, pageLimit} = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentProduct = productList.slice(offset, offset + pageLimit);
        this.setState({
            ...this.state,
            currentPage: currentPage,
            currentProduct: currentProduct,
            totalPages: totalPages
        });
    };


    onDeleteProduct(productdata) {
        if (productdata) {
            this.service.delete({
                id: productdata.id
            }, async () => {
                this.onLoadProduct();
                showMessage('Xóa sản phẩm thành công')
            })
        }
    }

    render() {
        return (
            <div>
                <div className="section-ptb">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-0">
                                    <h4>Danh sách sản phẩm</h4>
                                </div>
                                <div className="mb-4">
                                    <form>
                                        <div class="form-group mb-0">
                                            <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm"
                                                   value={this.state.productsearch} onChange={(e) => {
                                                this.onProductSearch(e.target.value)
                                            }}/>
                                        </div>
                                    </form>
                                </div>

                                <div className="mb-0 mb-md-4">
                                    {this.state.currentProduct.length > 0 ?
                                        <Row
                                            className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                                            {this.state.currentProduct.map((product, index) =>
                                                <AdminproductList product={product} key={index}
                                                                  deleteproduct={() => this.onDeleteProduct(product)}/>
                                            )
                                            }
                                        </Row>
                                        :
                                        <Row className="products products-loop grid ciyashop-products-shortcode">
                                            <div className="col-sm-12 text-center  mt-4 mt-md-5">
                                                <img src={require(`../assets/images/empty-search.jpg`)}
                                                     className="img-fluid mb-4" alt={""}/>
                                                <h3>Sorry! Không tìm thấy sản phẩm! </h3>
                                                <p>Vui lòng thử lại.</p>
                                            </div>
                                        </Row>
                                    }
                                </div>
                                <div className="row mt-md-3">
                                    <div className="col-12">
                                        {this.state.productList.length > 12 ?
                                            <div>
                                                <Pagination
                                                    totalRecords={this.state.productList.length}
                                                    pageLimit={12}
                                                    onPageChanged={this.onPageChanged}
                                                    IsDeleteProcess={this.state.IsDeleteProcess}
                                                />
                                            </div>
                                            :
                                            <div style={{display: 'none'}}>
                                                <Pagination
                                                    totalRecords={this.state.productList.length}
                                                    pageLimit={12}
                                                    onPageChanged={this.onPageChanged}
                                                    IsDeleteProcess={this.state.IsDeleteProcess}
                                                />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}

export default AdminProduct;
