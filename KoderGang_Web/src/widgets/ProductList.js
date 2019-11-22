/**
 * ProductList Widget
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.AddToWishList = this.AddToWishList.bind(this);

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        console.log("add cart")
        let Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart == null)
            Cart = [];
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
            localStorage.removeItem("LocalCartItems");
            localStorage.setItem("LocalCartItems", JSON.stringify(Cart));
            toast.success("Thêm sản phẩm vào giỏ hàng thành công");
        } else {
            toast.warning("Sản phẩm đã có trong giỏ hàng");
        }
        this.forceUpdate();
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
            toast.success("Sản phẩm thêm vào yêu thích");
        } else {
            toast.warning("Sản phẩm đã có trong yêu thích");
        }
        this.forceUpdate();
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

    render() {
        const {product} = this.props;
        let rat = [];
        let rating = product.rating;
        let i = 1;
        while (i <= 5) {
            if (i <= rating) {
                rat.push(<i className="fa fa-star"/>);
            } else {
                rat.push(<i className="fa fa-star-o"/>);
            }
            i += 1;
        }
        return (
            <div key={1} className={this.props.layoutstyle}>
                <ToastContainer autoClose={1000}/>
                <div
                    className="product product_tag-black product-hover-style-default product-hover-button-style-light product_title_type-single_line product_icon_type-line-icon">
                    <div className="product-inner element-hovered">
                        <div className="product-thumbnail">
                            <div className="product-thumbnail-inner">
                                <Link to={`/shop/${product.category}/${product.id}`}>
                                    {product.pictures[0] ?
                                        <div className="product-thumbnail-main">
                                            <img src={product.pictures[0]}
                                                 className="img-fluid" alt={"a"}/>
                                        </div>
                                        :
                                        null
                                    }
                                    {product.pictures[1] ?
                                        <div className="product-thumbnail-swap">
                                            <img src={product.pictures[1]}
                                                 className="img-fluid" alt={'áa'}/>
                                        </div>
                                        :
                                        null
                                    }
                                </Link>
                            </div>

                            <div className="product-actions">
                                <div className="product-actions-inner">
                                    <div className="product-action product-action-add-to-cart">
                                        {!this.CheckCardItem(product.id) ?
                                            <Link to={'#'}
                                                  onClick={() => this.AddToCart(product.id, product.name, product.pictures[0], 1, product.price, "In Stock")}
                                                  className="button add_to_cart_button" rel="nofollow">Thêm vào giỏ
                                                hàng</Link>
                                            :
                                            <Link to="/ShopingCart" className="button add_to_cart_button"
                                                  rel="nofollow">Xem giỏ hàng</Link>
                                        }
                                    </div>
                                    <div className="product-action product-action-wishlist">
                                        {!this.CheckWishList(product.id) ?
                                            <Link to={'#'}
                                                  onClick={() => this.AddToWishList(product.id, product.name, product.pictures[0], 1, product.price, "In Stock")}
                                                  className="add_to_wishlist" data-toggle="tooltip"
                                                  data-original-title="Wishlist" data-placement="top">Thêm vào yêu
                                                thích</Link>
                                            :
                                            <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip"
                                                  data-original-title="Wishlist" data-placement="top">Xem yêu
                                                thích</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            {product.tags ?
                                <span className="ciyashop-product-category">
                                    {product.tags.map((tag, index) =>
                                        <span key={index}>{tag}{index === product.tags.length - 1 ? '' : ','}</span>
                                    )}
                                </span>
                                : null}
                            {product.name ?
                                <h3 className="product-name">
                                    <Link to={`/ProductDetail`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                : null}
                            <div className="product-rating-price">
                                {product.salePrice ?
                                    <span className="price">
                                <ins>
                                    <span className="price-amount amount">{product.salePrice.toLocaleString()} <span
                                        className="currency-symbol">đ</span></span>
                                </ins>
                                </span> :
                                    <span className="price">
                                <ins>
                                    <span className="price-amount amount">{product.price.toLocaleString()} <span
                                        className="currency-symbol">đ</span></span>
                                </ins>
                                </span>}
                                <div className="product-rating">{rat}</div>
                            </div>
                            {product.description ?
                                <div className="product-details__short-description">
                                    <p>{product.description}
                                    </p>
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductList;