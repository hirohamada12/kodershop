/**
 * Top Salling Product Widgets
 */
import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import data from '../actions/product_1';

let MyProducts = data.data.products;

class TopSellingProduct extends Component {

    constructor(props) {
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.AddToWishList = this.AddToWishList.bind(this);
        let AddToCart, AddToWishList
    }

    AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        let Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart == null)
            Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if (selectedProduct == null) {

            Cart.push({
                ProductID: ProductID,
                ProductName,
                ProductImage: ProductImage,
                Qty: Qty,
                Rate: Rate,
                StockStatus: StockStatus
            });
            localStorage.removeItem("LocalCartItems");
            localStorage.setItem("LocalCartItems", JSON.stringify(Cart));
            toast.success("Thêm sản phẩm vào giỏ hàng thành công");
        } else {
            toast.warning("Sản phẩm tồn tại trong giỏ hàng");
        }
    }


    AddToWishList(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        let Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        if (Cart == null)
            Cart = new Array();

        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if (selectedProduct == null) {
            Cart.push({
                ProductID: ProductID,
                ProductName: ProductName,
                ProductImage: ProductImage,
                Qty: Qty,
                Rate: Rate,
                StockStatus: StockStatus
            });
            localStorage.removeItem("LocalWishListItems");
            localStorage.setItem("LocalWishListItems", JSON.stringify(Cart));
            toast.success("Thêm vào yêu thích thành công");
        } else {
            toast.warning("Sản phẩm đã tồn tại trong yêu thích");
        }
    }

    CheckCardItem(ID) {
        let checkcart = false;
        let Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }

    CheckWishList(ID) {
        let wishlist = false;
        let Wish = JSON.parse(localStorage.getItem("LocalWishListItems"));

        if (Wish && Wish.length > 0) {
            for (const wishItem of Wish) {
                if (wishItem.ProductID === ID) {
                    wishlist = true
                }
            }
        }
        return wishlist;
    }

    rating(productrat) {
        let rat = [];
        let i = 1;
        while (i <= 5) {
            if (i <= productrat) {
                rat.push(<i className="fa fa-star"/>);
            } else {
                rat.push(<i className="fa fa-star-o"/>);
            }
            i += 1;
        }
        return rat;
    }

    render() {
        console.log(MyProducts)
        return (
            <Row className="products products-loop grid ciyashop-products-shortcode">
                <ToastContainer autoClose={1000}/>
                {MyProducts.map((product, index) =>
                    (index < 8) ?
                        <Col sm={6} lg={3}>
                            <div
                                className="product product_tag-black product-hover-style-default product-hover-button-style-dark product_title_type-single_line product_icon_type-line-icon">
                                <div className="product-inner element-hovered">
                                    <div className="product-thumbnail">
                                        <div className="product-thumbnail-inner">
                                            <Link to={`/shop/${product.category}/${product.id}`}>
                                                <div className="product-thumbnail-main">
                                                    <img src={require(`../assets/product_image/${product.pictures[0]}`)}
                                                         className="img-fluid" alt="shop"/>
                                                </div>
                                                <div className="product-thumbnail-swap">
                                                    <img src={require(`../assets/product_image/${product.pictures[1]}`)}
                                                         className="img-fluid" alt="shop"/>

                                                </div>
                                            </Link>
                                        </div>
                                        <div className="product-actions">
                                            <div className="product-actions-inner">
                                                <div className="product-action product-action-add-to-cart">
                                                    {!this.CheckCardItem(product.id) ?
                                                        <a
                                                            onClick={() => this.AddToCart(product.id, product.name, product.pictures[0], 1, product.salePrice, "In Stock")}
                                                            className="button add_to_cart_button" rel="nofollow">Add to
                                                            cart</a>
                                                        :
                                                        <Link to="/ShopingCart" className="button add_to_cart_button"
                                                              rel="nofollow">View Cart</Link>
                                                    }

                                                </div>
                                                <div className="product-action product-action-wishlist">
                                                    {!this.CheckWishList(product.id) ?
                                                        <a
                                                            onClick={() => this.AddToWishList(product.id, product.name, product.pictures[0], 1, product.salePrice, "In Stock")}
                                                            className="add_to_wishlist" data-toggle="tooltip"
                                                            data-original-title="Wishlist" data-placement="top"> Add to
                                                            Wishlist</a>
                                                        :
                                                        <Link to="/wishlist" className="add_to_wishlist_fill"
                                                              data-toggle="tooltip" data-original-title="Wishlist"
                                                              data-placement="top">View Wishlist</Link>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info">
                        <span className="ciyashop-product-category">
                           {product.category}
                        </span>
                                        <h3 className="product-name">
                                            <Link to={`/shop/${product.category}/${product.id}`}>{product.name} </Link>
                                        </h3>
                                        <div className="product-rating-price">
                        <span className="price">
                           <ins>
                              <span className="price-amount amount">
                                 <span className="currency-symbol">$</span>{product.salePrice}
                              </span>
                           </ins>
                        </span>
                                            <div className="product-rating">{this.rating(product.rating)}</div>
                                        </div>
                                        <div className="product-details__short-description">
                                            <p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        :
                        <div></div>
                )}

            </Row>
        )
    }
}


export default TopSellingProduct
