/**
 *  Shop Checkout Page
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Input, Row} from 'reactstrap';
import OrderService from "../../services/OrderService";
import {showMessage} from "../modal/Modal";

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ShippingFlatRate: 30000,
            ShippingLocalPickUp: 0,
            TotalShippingCarge: 1.50,
            fieldvalue: {},
            errors: {}
        }
        this.ReadShippingCharge = this.ReadShippingCharge.bind(this);
        this.service = new OrderService();
    }

    componentDidMount() {
        this.ReadShippingCharge(document, 'script');
        let evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
        window.scrollTo(0, 0)
    }

    ReadCartItems() {

        let cart = JSON.parse(localStorage.getItem("LocalCartItems"));


        if (cart == null) {
            this.props.history.push(`/`)
        } else {

        }

        return cart


    }

    ReadShippingCharge() {
        if (localStorage.getItem("TotalShippingCharge") != null) {
            this.state.TotalShippingCarge = parseFloat(localStorage.getItem("TotalShippingCharge"));
        } else {
            this.state.TotalShippingCarge = 0;
        }


        if (localStorage.getItem("ShippingType") != null) {
            if (localStorage.getItem("ShippingType") === 1) {
                this.refs.rd1.setAttribute("checked", "checked");
                this.refs.rd2.removeAttribute("checked");

                if (this.refs.rd1 != null)
                    this.refs.rd1.checked = true;
            } else if (localStorage.getItem("ShippingType") === 2) {
                this.refs.rd2.setAttribute("checked", "checked");
                this.refs.rd1.removeAttribute("checked");


                this.refs.rd2.checked = true;

            }
        }
        this.forceUpdate();
    }

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
    }


    onCheckOutSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            localStorage.setItem("FinalCheckoutCartItems", localStorage.getItem("LocalCartItems"));
            localStorage.removeItem("LocalCartItems");
            this.props.history.push(`/SuccessScreen`)
        } else {
            // alert('Please Enter Valid Data.');
        }
    }

    handleValidation() {
        let fieldvalue = this.state.fieldvalue;
        let errors = {};
        let formIsValid = true;
        //First Name
        if (!fieldvalue["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "Vui Lòng Nhập Họ";
        }
        // if (typeof fieldvalue["firstname"] !== "undefined") {
        //     if (!fieldvalue["firstname"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["firstname"] = "Chỉ được nhập chữ";
        //     }
        // }
        //Last Name
        if (!fieldvalue["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "Vui Lòng Nhập Tên";
        }
        // if (typeof fieldvalue["lastname"] !== "undefined") {
        //     if (!fieldvalue["lastname"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["lastname"] = "Chỉ được nhập chữ";
        //     }
        // }
        //streetno
        if (!fieldvalue["streetno"]) {
            formIsValid = false;
            errors["streetno"] = "Vui lòng nhập địa chỉ";
        }
        //state
        if (!fieldvalue["state"]) {
            formIsValid = false;
            errors["state"] = "Please Enter Town / City";
        }

        if (!fieldvalue["zipcode"]) {
            formIsValid = false;
            errors["zipcode"] = "Please Enter Postcode / ZIP";
        }

        if (typeof fieldvalue["zipcode"] !== "undefined") {
            if (fieldvalue["zipcode"].length < 6) {
                formIsValid = false;
                errors["zipcode"] = "Please Enter valid Postcode / ZIP";
            }
        }

        if (!fieldvalue["phone"]) {
            formIsValid = false;
            errors["phone"] = "Vui lòng nhập số điện thoại";
        }

        if (typeof fieldvalue["phone"] !== "undefined") {
            if (fieldvalue["phone"].length < 10 || fieldvalue["phone"].length > 10) {
                formIsValid = false;
                errors["phone"] = "Nhập đúng số điện thoại";
            }
        }

        //Email ID
        if (!fieldvalue["email"]) {
            formIsValid = false;
            errors["email"] = "Vui Lòng nhập email";
        }
        this.setState({errors: errors});
        localStorage.setItem("firstname", fieldvalue["firstname"]);
        localStorage.setItem("lastname", fieldvalue["lastname"]);
        return formIsValid;

    }

    handleChange(field, e) {
        let fieldvalue = this.state.fieldvalue;
        fieldvalue[field] = e.target.value;
        this.setState({fieldvalue});
    }

    onSubmit = () => {
        let dataRequest = {
            userName: this.state.fieldvalue["firstname"] + " " + this.state.fieldvalue["lastname"],
            address: this.state.fieldvalue["streetno"],
            email: this.state.fieldvalue['email'],
            phone: this.state.fieldvalue["phone"],
            status: "NEW",
            listProduct:this.ReadCartItems(),
            total: parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toFixed(2),
        };
        console.log(dataRequest);
        this.service.insert(dataRequest, () => {
            showMessage('Cảm ơn bạn. Đơn Hàng đã được tạo thành công.Chúng tôi sẽ giao hàng đến cho bạn 1 cách nhanh nhất')
        });
    };

    render() {
        return (

            <div class="site-content">
                <div className="inner-intro">
                    <Container>
                        <Row className="intro-title align-items-center">
                            <Col md={6} className="text-left">
                                <div className="intro-title-inner">
                                    <h1>Thanh Toán</h1>
                                </div>
                            </Col>
                            <Col md={6} className="text-right">
                                <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                    <li className="home">
                                    <span className="item-element">
                                        <Link className="bread-link bread-home" to="/">Trang Chủ</Link>
                                    </span>
                                    </li>
                                    <li><span className="item-element">Thanh Toán</span></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="content-wrapper mb-7">
                    <Container>
                        <form onSubmit={this.onCheckOutSubmit.bind(this)}>
                            <Row class="mt-5">
                                <Col class="col-lg-6">
                                    <Row>
                                        <Col sm={12}>
                                            <div class="billing-fields mt-5">
                                                <h3>Thông Tin Giao Hàng</h3>
                                                <div class="billing-fields__field-wrapper">
                                                    <div class="form-group">
                                                        <label for="billing_first_name" class="">Họ&nbsp;<abbr
                                                            class="required" title="required">*</abbr>
                                                        </label>
                                                        <Input type="text" class="form-control"
                                                               name="billing_first_name" id="billing_first_name"
                                                               placeholder="" value={this.state.fieldvalue.firstname}
                                                               onChange={this.handleChange.bind(this, "firstname")}/>
                                                        <span className="error">{this.state.errors["firstname"]}</span>

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="billing_last_name" class="">Tên&nbsp;<abbr
                                                            class="required" title="required">*</abbr></label>
                                                        <Input type="text" class="form-control "
                                                               name="billing_last_name" id="billing_last_name"
                                                               placeholder="" value={this.state.fieldvalue.lastname}
                                                               onChange={this.handleChange.bind(this, "lastname")}/>
                                                        <span className="error">{this.state.errors["lastname"]}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="billing_country" class="">Vùng&nbsp;<abbr
                                                            class="required" title="required"/></label>
                                                        <select name="billing_country" id="billing_country"
                                                                class="form-control"
                                                                onChange={this.handleChange.bind(this, "country")}>
                                                            <option value="HN">Hà Nội</option>
                                                            <option value="HN2">Hà Nam</option>
                                                            <option value="HT">Hà Tĩnh</option>
                                                            <option value="NA">Nghệ An</option>
                                                            <option value="TH">Thanh Hóa</option>
                                                            <option value="HB">Hòa Bình</option>
                                                            <option value="HG">Hà Giang</option>
                                                            <option value="HY">Hưng Yên</option>
                                                        </select>


                                                    </div>
                                                    <div class="form-group">
                                                        <label for="billing_address_1" class="">Địa Chỉ&nbsp;
                                                            <abbr class="required" title="required">*</abbr></label>
                                                        <Input type="text" class="form-control" name="billing_address_1"
                                                               id="billing_address_1"
                                                               placeholder="Địa chỉ nhà, đường, quận huyện"
                                                               value={this.state.fieldvalue.streetno}
                                                               onChange={this.handleChange.bind(this, "streetno")}/>
                                                        <span className="error">{this.state.errors["streetno"]}</span>
                                                    </div>
                                                    {/*<div class="form-group">*/}
                                                    {/*    <label for="billing_address_2" class="screen-reader-text">Apartment,*/}
                                                    {/*        suite,*/}
                                                    {/*        unit etc.&nbsp;<span*/}
                                                    {/*            class="optional">(optional)</span></label>*/}
                                                    {/*    <Input type="text" class="form-control" name="billing_address_2"*/}
                                                    {/*           id="billing_address_2"*/}
                                                    {/*           placeholder="Apartment, suite, unit etc. (optional)"*/}
                                                    {/*           value={this.state.fieldvalue.address}*/}
                                                    {/*           onChange={this.handleChange.bind(this, "address")}/>*/}
                                                    {/*</div>*/}
                                                    {/*<div class="form-group">*/}
                                                    {/*    <label for="billing_city" class="">Town / City&nbsp;<abbr*/}
                                                    {/*        class="required" title="required">*</abbr></label>*/}
                                                    {/*    <Input type="text" class="form-control" name="billing_city"*/}
                                                    {/*           id="billing_city" placeholder=""*/}
                                                    {/*           value={this.state.fieldvalue.state}*/}
                                                    {/*           onChange={this.handleChange.bind(this, "state")}/>*/}
                                                    {/*    <span className="error">{this.state.errors["state"]}</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div class="form-group">*/}
                                                    {/*    <label for="billing_postcode" class="">Postcode / ZIP&nbsp;<abbr*/}
                                                    {/*        class="required" title="required">*</abbr></label>*/}
                                                    {/*    <Input type="text" class="form-control" name="billing_postcode"*/}
                                                    {/*           id="billing_postcode" placeholder=""*/}
                                                    {/*           value={this.state.fieldvalue.zipcode}*/}
                                                    {/*           autocomplete="postal-code"*/}
                                                    {/*           onChange={this.handleChange.bind(this, "zipcode")}/>*/}
                                                    {/*    <span className="error">{this.state.errors["zipcode"]}</span>*/}
                                                    {/*</div>*/}
                                                    <div class="form-group">
                                                        <label for="billing_phone" class="">Điện Thoại&nbsp;<abbr
                                                            class="required" title="required">*</abbr></label>
                                                        <Input type="tel" class="form-control" name="billing_phone"
                                                               id="billing_phone" placeholder=""
                                                               value={this.state.fieldvalue.phone} autocomplete="tel"
                                                               onChange={this.handleChange.bind(this, "phone")}/>
                                                        <span className="error">{this.state.errors["phone"]}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="billing_email" class="">Địa Chỉ Email &nbsp;<abbr
                                                            class="required" title="required">*</abbr></label>
                                                        <Input type="email" class="form-control" name="billing_email"
                                                               id="billing_email" placeholder=""
                                                               value={this.state.fieldvalue.email}
                                                               autocomplete="email username"
                                                               onChange={this.handleChange.bind(this, "email")}/>
                                                        <span className="error">{this.state.errors["email"]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6} className="mt-5">
                                    <h3 id="order_review_heading">Đơn Hàng Của Bạn</h3>
                                    <div id="order_review" class="checkout-review-order">
                                        {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                            <table class="shop_table checkout-review-order-table">
                                                <thead>
                                                <tr>
                                                    <th class="product-name">Sản Phẩm</th>
                                                    <th class="product-total">Tổng Giá</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {this.ReadCartItems().map((CartItem, index) => (
                                                    <tr class="cart_item">
                                                        <td class="product-name">
                                                            {CartItem.ProductName}&nbsp; <strong
                                                            class="product-quantity">× {CartItem.Qty}</strong></td>
                                                        <td class="product-total">
                                                            <span class="woocs_special_price_code"><span
                                                                class="Price-amount amount"> {(CartItem.Rate * CartItem.Qty).toLocaleString()}<span
                                                                className="Price-currencySymbol">đ</span> </span></span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                                <tfoot>
                                                {/*<tr class="cart-subtotal">*/}
                                                {/*    <th>Subtotal</th>*/}
                                                {/*    <td><span class="woocs_special_price_code"><span*/}
                                                {/*        class="Price-amount amount"><span*/}
                                                {/*        class="Price-currencySymbol">$</span>{this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}</span></span>*/}
                                                {/*    </td>*/}
                                                {/*</tr>*/}
                                                <tr class="shipping-totals shipping">
                                                    <th>Giao Hàng</th>
                                                    <td data-title="Shipping">
                                                        <ul id="shipping_method" className="shipping-methods">
                                                            <a onClick={() => this.SetShippingCharge(1)}>
                                                                <li>
                                                                    <input style={{cursor: 'pointer'}} id="rd1"
                                                                           ref="rd1" type="radio"
                                                                           name="shipping_method[0]" data-index="0"
                                                                           id="shipping_method_0_flat_rate3"
                                                                           value="flat_rate:3"
                                                                           className="shipping_method"/><label
                                                                    style={{cursor: 'pointer'}}
                                                                    for="shipping_method_0_flat_rate3">Giao Nhanh: <span
                                                                    className="Price-amount amount">{parseFloat(this.state.ShippingFlatRate).toLocaleString()} </span><span
                                                                    className="Price-currencySymbol"> đ</span></label>
                                                                </li>
                                                            </a>
                                                            <a onClick={() => this.SetShippingCharge(2)}>
                                                                <li>

                                                                    <input style={{cursor: 'pointer'}} type="radio"
                                                                           id="rd2" ref="rd2" name="shipping_method[0]"
                                                                           data-index="0"
                                                                           id="shipping_method_0_local_pickup4"
                                                                           value="local_pickup:4"
                                                                           className="shipping_method"/><label
                                                                    style={{cursor: 'pointer'}}
                                                                    for="shipping_method_0_local_pickup4">Giao
                                                                    Chậm: <span
                                                                        className="Price-amount amount">{parseFloat(this.state.ShippingLocalPickUp).toLocaleString()}</span><span
                                                                        className="Price-currencySymbol">đ</span></label>

                                                                </li>
                                                            </a>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Tổng</th>
                                                    <td><strong><span class="woocs_special_price_code"><span
                                                        class="Price-amount amount">
                                                        {parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString()}
                                                        <span
                                                            className="Price-currencySymbol"> đ</span></span></span></strong>
                                                    </td>
                                                </tr>
                                                </tfoot>
                                            </table>
                                            :
                                            <div>Không Có Sản Phẩm</div>
                                        }
                                        <div id="payment" class="checkout-payment">
                                            <ul class="payment_methods methods">
                                                <li class="payment_method_paypal">
                                                    <input id="payment_method_paypal" type="radio" checked disabled
                                                           class="input-radio" name="payment_method" value="paypal"
                                                           data-order_button_text="Proceed to PayPal"/>

                                                    <label for="payment_method_paypal">
                                                        Trả tiền lúc giao hàng
                                                        {/*<img*/}
                                                        {/*src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"*/}
                                                        {/*alt="PayPal acceptance mark"/>*/}
                                                    </label>
                                                </li>
                                            </ul>
                                            <div class="form-row place-order">


                                                <div class="terms-and-conditions-wrapper">
                                                    <div class="privacy-policy-text">
                                                        <p>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng
                                                            của bạn,
                                                            hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và cho
                                                            các mục đích khác được mô tả trong chúng tôi
                                                        </p>
                                                    </div>
                                                    <p class="form-row validate-required ml-5">
                                                        <label class="form__label form__label-for-checkbox checkbox">
                                                            <Input checked disabled type="checkbox"
                                                                   class="form__input form__input-checkbox input-checkbox"
                                                                   name="terms" id="terms"/>
                                                            <span class="terms-and-conditions-checkbox-text">Tôi Đã đọc và đồng ý tiếp tục
                                                        </span>&nbsp;<span class="required">*</span>
                                                        </label>
                                                        <Input type="hidden" name="terms-field" value="1"/>
                                                    </p>
                                                </div>

                                                <button onClick={this.onSubmit} class="button alt"
                                                        name="checkout_place_order"
                                                        id="place_order" value="Place order" data-value="Place order">
                                                    Đặt Hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </div>

            </div>

        )
    }
}

export default CheckOut;
