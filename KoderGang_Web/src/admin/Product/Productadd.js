/**
 *  Admin Site Product Add
 */
import React, {Component} from 'react';
import {Button, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import {onChangeSelect, onChangeValue} from "../../common/Util";
import ProductService from "../../services/ProductService";
import {showMessage} from "../../components/modal/Modal";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};
const productdata = {
    Product_single: "product-single.jpg",
    product_gallery: [
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg"
    ],
    size: [
        "M",
        "L",
        "XXL",
        "S"
    ],
    colors: [
        "Black",
        "Red",
        "Blue",
        "Green"
    ],
    tags: [
        "Athleisure",
        "Jacket",
        "Women",
        "Clothing",
        "Blazers"
    ]

};

class Productadd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                shortDetails: '',
                price: '',
                description: '',
                sizeString: [],
                colorsString: [],
                brand: '',
                categoryString: [],
                stock: '',
                new: true,
                quantity: '',
                tagsString: [],
                variantsString: [],
                rating: 4
            },
            picturesString: [],
            pictures: [],
            photoIndex: 0,
            isOpen: false,
            ErrorMsg: "",
            errors: {}
        };
        this.serviceProduct = new ProductService();
        this.Uploadimage = this.Uploadimage.bind(this);
    }

    Uploadimage(picture) {
        if (picture === '') {
            this.setState({
                ...this.state,
                ErrorMsg: "Định dạng file không hỗ trợ"
            })
        } else {
            this.getBase64(picture, (result) => {
                this.setState(prevState => ({
                    pictures: [
                        ...prevState.pictures,
                        {
                            imageData: result,
                            name: picture[0].name,
                        }
                    ],
                    picturesString: [
                        ...prevState.picturesString, picture[0].name
                    ],
                    ErrorMsg: ''
                }));
            });
        }
    }

    getBase64(file, callback) {
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file[0]);
            reader.onloadend = function () {
                callback(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }

    validate = () => {
        let data = this.state.data;
        let isValid = true;
        let errors = [];
        if (!data['name']) {
            errors['name'] = 'Tên sản phẩm không được rỗng';
            isValid = false
        }
        if (!data['price']) {
            errors['price'] = 'Giá sản phẩm không được rỗng';
            isValid = false
        }
        if (data['sizeString'].length < 1) {
            errors['sizeString'] = 'Chọn kích cỡ sản phẩm';
            isValid = false
        }
        if (data['colorsString'].length < 1) {
            errors['colorsString'] = 'Chọn màu sắc sản phẩm';
            isValid = false
        }
        if (!data['brand']) {
            errors['brand'] = 'Hãng sản xuất không được rỗng';
            isValid = false
        }
        if (!data['stock']) {
            errors['stock'] = 'Kho không được rỗng';
            isValid = false
        }
        if (!data['quantity']) {
            errors['quantity'] = 'Số lượng không được rỗng';
            isValid = false
        }
        if (data['categoryString'].length < 1) {
            errors['categoryString'] = 'Chọn danh mục sản phẩm';
            isValid = false
        }
        console.log(errors);
        this.setState({
            errors: errors
        });
        return isValid
    };
    onChangeInput = (name, e) => {
        onChangeValue(this, name, e);
    };
    onChangeCheckBox = (name, e) => {
        if (e.target.name) {
            let lstValue = this.state.data[name];
            if (lstValue[name] && lstValue[name].find(item => item === e.target.name)) {
                lstValue[name].filter(item => item !== e.target.name);
            } else {
                lstValue.push(e.target.name);
            }
            onChangeSelect(this, name, lstValue);
        }
    };
    onsubmit = () => {
        let dataRequest = this.state.data;
        dataRequest.sale = !!dataRequest['salePrice'];
        dataRequest.sizeString = JSON.stringify(dataRequest.sizeString);
        dataRequest.categoryString = JSON.stringify(dataRequest.categoryString);
        dataRequest.colorsString = JSON.stringify(dataRequest.colorsString);
        dataRequest.tagsString = dataRequest.categoryString;
        dataRequest.picturesString = JSON.stringify(this.state.picturesString);
        dataRequest.variantsString = JSON.stringify(dataRequest.variantsString);
        dataRequest.lstImages = this.state.pictures;
        if (this.validate()) {
            this.serviceProduct.insert(dataRequest, () => {
                showMessage('Thêm sản phẩm thành công');
                window.open("/admin/Product", "_self");
            })
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="site-content">
                    <div className="content-wrapper section-ptb">
                        <Container>
                            <div className="product-content-top single-product single-product-edit">
                                <Row>
                                    <div className="product-top-left col-xl-5 col-md-6">
                                        <div className="product-top-left-inner">
                                            <div className="ciyashop-product-images">
                                                <div
                                                    className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                                    <div
                                                        className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                                        <Slider {...settings}
                                                                className="ciyashop-product-gallery__wrapper popup-gallery">
                                                            <div className="ciyashop-product-gallery__image">
                                                                <img
                                                                    src={require('../../assets/product_image/' + productdata.Product_single)}
                                                                    className="img-fluid" alt={""}/>
                                                                <div
                                                                    className="d-flex justify-content-center image-content align-items-center">
                                                                    <ImageUploader
                                                                        buttonText=""
                                                                        withIcon={false}
                                                                        withPreview={true}
                                                                        fileTypeError={this.state.ErrorMsg}
                                                                        onChange={this.Uploadimage}
                                                                        imgExtension={['.jpg', '.jpeg', '.png']}
                                                                    />
                                                                </div>
                                                            </div>

                                                        </Slider>

                                                    </div>
                                                    <div className="ciyashop-product-thumbnails">
                                                        <Slider {...productslider}
                                                                className="ciyashop-product-thumbnails__wrapper">
                                                            {productdata.product_gallery.map((pictureimage, index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a>
                                                                            <img
                                                                                src={require('../../assets/product_image/' + pictureimage)}
                                                                                className="img-fluid" alt={""}/>
                                                                        </a>
                                                                        <div
                                                                            className="d-flex justify-content-center image-content align-items-center">
                                                                            <ImageUploader
                                                                                buttonText="" withIcon={false}
                                                                                withPreview={true}
                                                                                fileTypeError={this.state.ErrorMsg}
                                                                                onChange={this.Uploadimage}
                                                                                imgExtension={['.jpg', '.jpeg', '.png']}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                    <div className="clearfix"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-top-right col-xl-7 col-md-6">
                                        <div className="product-top-right-inner">
                                            <div className="summary entry-summary">
                                                <FormGroup className="edit-icon">
                                                    <Input type="text" className="form-control product_title"
                                                           onChange={this.onChangeInput.bind(this, 'name')}
                                                           placeholder="Tên Sản Phẩm"/>
                                                    <span hidden={!this.state.errors['name']}
                                                          className={'errors'}>{this.state.errors['name']}</span>
                                                </FormGroup>
                                                <FormGroup className="edit-icon">
                                                    <Input type="number" className="form-control price"
                                                           onChange={this.onChangeInput.bind(this, 'price')}
                                                           placeholder="Giá sản phẩm"/>
                                                    <span hidden={!this.state.errors['price']}
                                                          className={'errors'}>{this.state.errors['price']}</span>
                                                </FormGroup>
                                                <FormGroup className="edit-icon">
                                                    <Input type="number" className="form-control price"
                                                           onChange={this.onChangeInput.bind(this, 'salePrice')}
                                                           placeholder="Giá giảm"/>
                                                    <span hidden={!this.state.errors['salePrice']}
                                                          className={'errors'}>{this.state.errors['salePrice']}</span>
                                                </FormGroup>
                                                <FormGroup className="edit-icon">
                                                    <Input type="textarea" className="form-control" rows="3"
                                                           onChange={this.onChangeInput.bind(this, 'description')}
                                                           placeholder="Mô tả"/>
                                                </FormGroup>
                                                <FormGroup className="edit-icon">
                                                    <Input type="textarea" className="form-control" rows="3"
                                                           onChange={this.onChangeInput.bind(this, 'shortDetails')}
                                                           placeholder="Mô tả ngắn"/>
                                                </FormGroup>
                                                <Label className="title">Kích cỡ</Label>
                                                <FormGroup>
                                                    {productdata.size.map((size, index) =>
                                                        <Label key={index}>
                                                            <Input key={index} type="checkbox"
                                                                   name={size}
                                                                   onChange={this.onChangeCheckBox.bind(this, 'sizeString')}/>{' '}
                                                            {size}
                                                        </Label>
                                                    )}
                                                    <span hidden={!this.state.errors['sizeString']}
                                                          className={'errors'}>{this.state.errors['sizeString']}</span>
                                                </FormGroup>
                                                <Label className="title">Màu sắc</Label>
                                                <FormGroup>
                                                    {productdata.colors.map((color, index) =>
                                                        <Label key={index}>
                                                            <Input key={index} type="checkbox"
                                                                   name={color}
                                                                   onChange={this.onChangeCheckBox.bind(this, 'colorsString')}/>{' '}
                                                            {color}
                                                        </Label>
                                                    )}
                                                    <span hidden={!this.state.errors['colorsString']}
                                                          className={'errors'}>{this.state.errors['colorsString']}</span>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="title pl-0">Brand</Label>
                                                    <Input type="text" className="form-control"
                                                           onChange={this.onChangeInput.bind(this, 'brand')}
                                                           placeholder="Hãng sản xuất"/>
                                                    <span hidden={!this.state.errors['brand']}
                                                          className={'errors'}>{this.state.errors['brand']}</span>
                                                </FormGroup>

                                                <Label className="title mb-2">Danh Mục</Label>
                                                <FormGroup>
                                                    {productdata.tags.map((brand, index) =>
                                                        <Label key={index}>
                                                            <Input key={index} type="checkbox"
                                                                   name={brand}
                                                                   onChange={this.onChangeCheckBox.bind(this, 'categoryString')}/>{' '}
                                                            {brand}
                                                        </Label>
                                                    )}
                                                    <span hidden={!this.state.errors['categoryString']}
                                                          className={'errors'}>{this.state.errors['categoryString']}</span>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="title pl-0">Kho</Label>
                                                    <Input type="text" className="form-control"
                                                           onChange={this.onChangeInput.bind(this, 'stock')}
                                                           placeholder="Kho"/>
                                                    <span hidden={!this.state.errors['stock']}
                                                          className={'errors'}>{this.state.errors['stock']}</span>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="title pl-0">Số lượng</Label>
                                                    <Input type="text" className="form-control"
                                                           onChange={this.onChangeInput.bind(this, 'quantity')}
                                                           placeholder="Số lượng"/>
                                                    <span hidden={!this.state.errors['quantity']}
                                                          className={'errors'}>{this.state.errors['quantity']}</span>
                                                </FormGroup>
                                                <Button onClick={this.onsubmit}
                                                        className="btn btn-primary mb-2 mr-2"> Lưu </Button>
                                                <Link to="/admin/Product" className="btn btn-danger mb-2"> Quay
                                                    lại </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Productadd;
