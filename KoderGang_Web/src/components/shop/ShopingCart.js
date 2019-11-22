import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row, Table} from 'reactstrap';
import Popup from "reactjs-popup";

class ShopingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ShippingFlatRate: 30000,
            ShippingLocalPickUp: 0,
            TotalShippingCarge: 0,
            Adress1: "Tầng 21 KeangNam",
            Adress2: "Hà Nội",
            Adress3: "VN"

        };
        this.ReadCartItems = this.ReadCartItems.bind(this);
        this.PlusQty = this.PlusQty.bind(this);
        this.MinusQty = this.MinusQty.bind(this);
        this.SetShippingCharge = this.SetShippingCharge.bind(this);
        this.SetShippingAddressChange = this.SetShippingAddressChange.bind(this);
        let removeFromCart, PlusQty, MinusQty, SetShippingCharge, SetShippingAddressChange;
        this.SetDefaults = this.SetDefaults.bind(this);
    }

    componentDidMount() {
        this.SetDefaults(document, 'script');
        let evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
        window.scrollTo(0, 0);
    }


    SetDefaults() {
        let cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (cart.length === 0) {
            this.props.history.push(`/`);
            return;
        }
        this.SetShippingCharge(1);
        localStorage.setItem("TotalShippingCharge", this.state.TotalShippingCarge);
        localStorage.setItem("ShippingType", 1);
        localStorage.setItem("ShippingAddress1", this.state.Adress1);
        localStorage.setItem("ShippingAddress2", this.state.Adress2);
        localStorage.setItem("ShippingAddress3", this.state.Adress3);
        this.forceUpdate();
    }

    ReadCartItems() {
        return JSON.parse(localStorage.getItem("LocalCartItems"));
    }

    removeFromCart = (Index) => {
        let UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
        this.forceUpdate();
    };

    PlusQty = (Index) => {
        let UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart[Index].Qty = parseInt(UpdatedCart[Index].Qty + 1);
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
        this.forceUpdate();
    };

    MinusQty = (Index) => {
        let UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));

        if (UpdatedCart[Index].Qty !== 1) {

            UpdatedCart[Index].Qty = parseInt(UpdatedCart[Index].Qty - 1);
            localStorage.removeItem("LocalCartItems");
            localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
        } else {
            this.removeFromCart(Index);
        }
        this.forceUpdate();
    };

    SetShippingCharge = (CaseNo) => {
        if (CaseNo === 1) {
            this.state.TotalShippingCarge = this.state.ShippingFlatRate;

            this.refs.rd1.setAttribute("checked", "checked");
            this.refs.rd2.removeAttribute("checked");

            if (this.refs.rd1 != null)
                this.refs.rd1.checked = true;
            localStorage.setItem("TotalShippingCharge", this.state.TotalShippingCarge);
            localStorage.setItem("ShippingType", 1);

        } else if (CaseNo === 2) {
            this.state.TotalShippingCarge = this.state.ShippingLocalPickUp;
            this.refs.rd2.setAttribute("checked", "checked");
            this.refs.rd1.removeAttribute("checked");
            this.refs.rd2.checked = true;
            localStorage.setItem("TotalShippingCharge", this.state.TotalShippingCarge);
            localStorage.setItem("ShippingType", 2);
        }
        this.forceUpdate();
    };
    SetShippingAddressChange = (CaseNo) => {
        if (CaseNo === 1) {
            this.state.Adress1 = "Hà Tĩnh,";
            this.state.Adress2 = "Hương Khê";
            this.state.Adress3 = "VN";
            document.getElementById("ad1").setAttribute("checked", "checked");
            document.getElementById("ad2").removeAttribute("checked");

            if (document.getElementById("ad1") != null)
                document.getElementById("ad1").checked = true;
        } else if (CaseNo === 2) {
            this.state.Adress1 = "Hà Nội";
            this.state.Adress2 = "Cầu Giấy";
            this.state.Adress3 = "VN";
            document.getElementById("ad2").setAttribute("checked", "checked");
            document.getElementById("ad1").removeAttribute("checked");
            document.getElementById("ad2").checked = true;
        }
        localStorage.setItem("ShippingAddress1", this.state.Adress1);
        localStorage.setItem("ShippingAddress2", this.state.Adress2);
        localStorage.setItem("ShippingAddress3", this.state.Adress3);
        this.forceUpdate();
    };

    render() {
        return (
            <div className="site-content">
                <div className="content-wrapper section-ptb">
                    <Container>
                        {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?
                            <Row>
                                <Col xl={8}>
                                    <div className="table-responsive">
                                        <Table className="cart-table">
                                            <thead>
                                            <tr>
                                                <th className="product-remove"/>
                                                <th className="product-thumbnail"/>
                                                <th className="product-name">
                                                    <span className="nobr">Sản phẩm</span>
                                                </th>
                                                <th className="product-price">
                                                        <span className="nobr">
                                                            Gía </span>
                                                </th>
                                                <th className="product-stock-status">
                                                    Số lượng
                                                </th>
                                                <th className="product-subtotal">Tổng</th>
                                            </tr>

                                            {this.ReadCartItems().map((CartItem, index) => (
                                                <tr>
                                                    <td className="product-remove">
                                                        <a onClick={() => this.removeFromCart(index)}
                                                           className="remove"/>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img
                                                                src={CartItem.ProductImage}
                                                                alt="product"/>
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        {CartItem.ProductName}
                                                    </td>
                                                    <td className="product-price">
                                                        {CartItem.Rate.toLocaleString()} đ
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="quantity">
                                                            <label className="screen-reader-text"
                                                                   for="quantity_5cd96a418e8ad">Số lượng</label>
                                                            <input type="text" className="input-text qty text"
                                                                   value={CartItem.Qty} title="Qty"/>
                                                            <div className="quantity-nav">
                                                                <a className="quantity-button quantity-up"
                                                                   onClick={() => this.PlusQty(index)}>+</a>
                                                                <a className="quantity-button quantity-down"
                                                                   onClick={() => this.MinusQty(index)}>-</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        {(CartItem.Rate * CartItem.Qty).toLocaleString()}đ
                                                    </td>
                                                </tr>
                                            ))}
                                            </thead>
                                        </Table>
                                    </div>
                                </Col>
                                <div className="cart-collaterals col-xl-4">
                                    <div className="cart_totals ">
                                        <h2>Đơn Hàng</h2>
                                        <div className="table-responsive">
                                            <Table cellspacing="0" className="shop_table shop_table_responsive">
                                                <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Tổng Gía</th>
                                                    <td data-title="Subtotal"><span
                                                        className="woocs_special_price_code"><span
                                                        className="Price-amount amount"> {(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)).toLocaleString()}
                                                        <span
                                                            className="Price-currencySymbol">đ</span> </span></span>
                                                    </td>
                                                </tr>
                                                <tr className="shipping-totals shipping">
                                                    <th>Giao Hàng</th>
                                                    <td data-title="Shipping">
                                                        <ul id="shipping_method" className="shipping-methods">
                                                            <a onClick={() => this.SetShippingCharge(1)}>
                                                                <li>
                                                                    <input style={{cursor: 'pointer'}} id="rd1"
                                                                           ref="rd1" type="radio"
                                                                           name="shipping_method[0]" data-index="0"
                                                                           value="flat_rate:3"
                                                                           className="shipping_method"/><label
                                                                    style={{cursor: 'pointer'}} for="rd1">Giao
                                                                    Nhanh: <span
                                                                        className="Price-amount amount">{parseFloat(this.state.ShippingFlatRate).toLocaleString()}<span
                                                                        className="Price-currencySymbol">đ</span></span></label>

                                                                </li>
                                                            </a>
                                                            <a onClick={() => this.SetShippingCharge(2)}>
                                                                <li>
                                                                    <input style={{cursor: 'pointer'}} type="radio"
                                                                           id="rd2" ref="rd2" name="shipping_method[0]"
                                                                           data-index="0" value="local_pickup:4"
                                                                           className="shipping_method"/><label
                                                                    style={{cursor: 'pointer'}} for="rd2">Giao
                                                                    Chậm: <span
                                                                        className="Price-amount amount">{parseFloat(this.state.ShippingLocalPickUp).toLocaleString()}<span
                                                                        className="Price-currencySymbol">đ</span></span></label>
                                                                </li>
                                                            </a>
                                                        </ul>
                                                        <p className="shipping-destination">
                                                            Ước tính cho <strong>Việt Nam</strong>. </p>
                                                    </td>
                                                </tr>
                                                <tr className="shipping-totals shipping">
                                                    <th>Địa Chỉ</th>
                                                    <td data-title="Shipping">
                                                        {this.state.Adress1}
                                                        <br/>
                                                        {this.state.Adress2}
                                                        <br/>
                                                        {this.state.Adress3}
                                                        <div className="shipping-calculator">
                                                            <Popup trigger={<Link to="#"
                                                                                  className="shipping-calculator-button">Thay
                                                                Đổi Địa Chỉ</Link>} modal>
                                                                {close => (

                                                                    <div className="container">
                                                                        <div className="cart_totals">
                                                                            <h2>Địa Chỉ</h2>
                                                                            <div className="table-responsive">
                                                                                <table
                                                                                    className="shop_table shop_table_responsive table">
                                                                                    <tr className="cart-collaterals">
                                                                                        <a style={{cursor: 'pointer'}}
                                                                                           onClick={() => this.SetShippingAddressChange(1)}>
                                                                                            <td>
                                                                                                <input type="radio"
                                                                                                       name="Address"
                                                                                                       id="ad1"
                                                                                                       ref="ad1"/>
                                                                                            </td>
                                                                                            <td>
                                                                                                21 KeangNam,
                                                                                                Hà Nội
                                                                                                VN
                                                                                            </td>
                                                                                        </a>
                                                                                    </tr>
                                                                                    <tr className="cart-collaterals">
                                                                                        <a style={{cursor: 'pointer'}}
                                                                                           className="cart-collaterals"
                                                                                           onClick={() => this.SetShippingAddressChange(2)}>
                                                                                            <td>
                                                                                                <input type="radio"
                                                                                                       name="Address"
                                                                                                       id="ad2"
                                                                                                       ref="ad2"/>
                                                                                            </td>
                                                                                            <td>
                                                                                                21 KeangNam, Hà Nội
                                                                                            </td>
                                                                                        </a>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            <div class="proceed-to-checkout">
                                                                                <a class="checkout-button button"
                                                                                   onClick={() => {
                                                                                       close()
                                                                                   }}>OK</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                )}
                                                            </Popup>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Tổng</th>
                                                    <td data-title="Total"><strong><span className="special_price_code"><span
                                                        className="Price-amount amount"> {parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat(this.state.TotalShippingCarge.toFixed(2))).toLocaleString()}
                                                        <span
                                                            className="Price-currencySymbol">đ</span>   </span></span></strong>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="proceed-to-checkout">
                                            <Link to="CheckOut" className="checkout-button button">Thanh Toán</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            :
                            <div className="wishlist-not-found">
                                <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4"
                                     alt={"empty-search"}/>
                                <h4 className="d-block">Giỏ Hàng Rỗng.</h4>
                                <a className="btn btn-primary" href="/shop">Quay Lại Shop</a>
                            </div>
                        }
                    </Container>
                </div>
            </div>
        )
    }
}

export default ShopingCart;
