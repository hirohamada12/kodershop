/**
 * product add page
 */
/* eslint-disable */
import React from 'react';
import {Grid} from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import {
  Button,
  FormCheckbox,
  FormInput,
  FormSelect,
  FormTextarea
} from "shards-react";
import {onChangeValue} from "../../utils/Util";
import {Link, Redirect} from 'react-router-dom';

import {showMessage} from "../../components/components-overview/Modal";
import ProductService from "../../service/ProductService";
import CategoryService from "../../service/CategoryService";
import Constants from "../../common/Constants";

const lstDataSize = ['35', '36', '37', '38', '39', '40'];
const fs = require('browserify-fs');

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        size: [],
        imageMain: '625x800.png',
        imageThumbnail1: '625x800.png',
        imageThumbnail2: '625x800.png',
        imageThumbnail3: '625x800.png',
        imageThumbnail4: '625x800.png',
      },
      action: Constants.ACTION.INSERT,
      errors: []
    };
    this.productService = new ProductService();
    this.categoryService = new CategoryService();
  }


  componentWillMount = async () => {
    this.getCategory();
    await this.props.location.data && this.setState(prevState => ({
      data: this.props.location.data._original,
      action: Constants.ACTION.UPDATE,
    }))
  };

  componentDidMount() {

  }

  getCategory = async () => {
    this.categoryService.getAll({}, result => {
      this.setState({
        lstCategory: result.data
      })
    })
  };
  onSubmit = () => {
    if (this.validate()) {
      this.productService.insert(this.state.data, async () => {
        await showMessage('Lưu sản phẩm thành công');
        this.props.history.goBack()
      })
    }
  };

  validate = () => {
    let data = this.state.data;
    let isValid = true;
    let errors = [];
    if (!data['productName']) {
      isValid = false;
      errors['productName'] = 'Tên sản phẩm không được rỗng';
      errors['inputproductName'] = true
    }
    if (data['productName'] && data['productName'].length > 50) {
      isValid = false;
      errors['name'] = 'Tên sản phẩm không được quá 50 kí tự';
      errors['inputproductName'] = true
    }
    if (!data['productCode']) {
      isValid = false;
      errors['productCode'] = 'Mã sản phẩm không được rỗng';
      errors['inputproductCode'] = true;
    }
    if (!data['price']) {
      isValid = false;
      errors['price'] = 'Giá sản phẩm không được rỗng';
      errors['inputprice'] = true;
    }
    if (data['price'] && Number(data['price']) < 0) {
      isValid = false;
      errors['price'] = 'Giá sản phẩm phải lớn hơn 0';
      errors['inputprice'] = true;
    }
    if (!data['categoryId']) {
      isValid = false;
      errors['categoryId'] = 'Danh mục sản phẩm không được rỗng';
      errors['selectcategoryId'] = true;
    }
    if (!data['quantity']) {
      isValid = false;
      errors['quantity'] = 'Số lượng sản phẩm không được rỗng';
      errors['inputquantity'] = true;
    }
    if (data['quantity'] && Number(data['quantity']) < 0) {
      isValid = false;
      errors['quantity'] = 'Số lượng sản phẩm phải lớn hơn 0';
      errors['inputquantity'] = true;
    }
    if (!data['color']) {
      isValid = false;
      errors['color'] = 'Màu sắc sản phẩm không được rỗng';
      errors['inputcolor'] = true;
    }
    if (!data['description']) {
      isValid = false;
      errors['description'] = 'Mô tả không được rỗng';
      errors['inputdescription'] = true;
    }
    if (data['description'] && data['description'].length < 100) {
      isValid = false;
      errors['description'] = 'Mô tả phải có ít nhất  100 từ';
      errors['inputdescription'] = true;
    }
    // if (this.state.data.images.length < 1) {
    //   showError('Bạn phải chọn ít nhất 1 ảnh cho sản phẩm');
    //   isValid = false;
    // }
    this.setState({
      errors: errors
    });
    return isValid
  };

  handleTextChange = (name, e) => {
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [`${'input' + name}`]: false,
        [name]: ''
      }
    }));
    console.log(name, e.target.value);
    onChangeValue(this, name, e)
  };
  handleSelectChange = (name, e) => {
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [`${'select' + name}`]: false,
        [name]: ''
      }
    }));
    console.log(name, e.target.value);
    onChangeValue(this, name, e)
  };
  //function for upload image
  onDrop = async (image) => {
    console.log(image);
    // fs.writeFile(`'../../assets/images/` + image[0].name, image, function (err, data) {
    //   console.log(data);
    // });
    // this.setState({
    //   images: this.state.data.images.push(image[0].name),
    // });
  };
  handleCheckBoxChange = (size, e) => {
    let lstSize = this.state.data.lstSize;
    if (lstSize.find(item => item === size)) {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          lstSize: lstSize.filter(item => item !== size)
        }
      }))
    } else {
      lstSize.push(size);
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          lstSize: lstSize
        }
      }));
    }
  };

  render() {
    if (!this.props.location.data) {
      return <Redirect push to="/product"/>;
    }
    console.log(this.state.data)
    return (
      <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
        <Grid container spacing={10} className="my-0">
          <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
            <Grid container spacing={10} className="my-0">
              <Grid item xs={12} sm={12} md={6} lg={6}
                    className="py-0 mb-md-0 mb-30">
                <Grid container spacing={24}
                      className="iron-product-gallery my-0">
                  <Grid item xs={3} sm={2} md={2} lg={2} className="py-0">
                    <div className="product-gallery-nav">
                      <div className="product-gallery-item">
                        <div className="image-upload">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.imageThumbnail1)}`}
                              alt="product-item"
                              height="50"
                            />
                          </a>
                          <div
                            className="image-content d-flex justify-content-center align-items-center">
                            <ImageUploader
                              withPreview
                              withIcon={false}
                              buttonText={<i
                                className="material-icons icon-add-button-upload">add</i>}
                              onChange={this.onDrop}
                              value={`${require('../../assets/images/' + this.state.data.imageThumbnail1)}`}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="product-gallery-item">
                        <div className="image-upload">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.imageThumbnail2)}`}
                              alt="product-item"
                              height="50"
                            />
                          </a>
                          <div
                            className="image-content d-flex justify-content-center align-items-center">
                            <ImageUploader
                              withPreview
                              withIcon={false}
                              buttonText={<i
                                className="material-icons icon-add-button-upload">add</i>}
                              onChange={this.onDrop}
                              value={`${require('../../assets/images/' + this.state.data.imageThumbnail2)}`}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="product-gallery-item">
                        <div className="image-upload">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.imageThumbnail3)}`}
                              alt="product-item"
                              height="50"
                            />
                          </a>
                          <div
                            className="image-content d-flex justify-content-center align-items-center">
                            <ImageUploader
                              withPreview
                              withIcon={false}
                              buttonText={<i
                                className="material-icons icon-add-button-upload">add</i>}
                              onChange={this.onDrop}
                              value={`${require('../../assets/images/' + this.state.data.imageThumbnail3)}`}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="product-gallery-item">
                        <div className="image-upload">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.imageThumbnail4)}`}
                              alt="product-item"
                              height="50"
                            />
                          </a>
                          <div
                            className="image-content d-flex justify-content-center align-items-center">
                            <ImageUploader
                              withPreview
                              withIcon={false}
                              buttonText={<i
                                className="material-icons icon-add-button-upload">add</i>}
                              onChange={this.onDrop}
                              value={`${require('../../assets/images/' + this.state.data.imageThumbnail4)}`}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={9} sm={10} md={10} lg={10} className="py-0">
                    <div className="product-gallery-nav">
                      <div className="product-gallery-item">
                        <div className="image-upload-big">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.imageMain)}`}
                              alt="poster-image"
                            />
                          </a>
                          <div
                            className="image-content d-flex justify-content-center align-items-center">
                            <ImageUploader
                              withPreview
                              withIcon={false}
                              buttonText={<i
                                className="material-icons icon-add-button-upload">add</i>}
                              onChange={this.onDrop}
                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                              maxFileSize={5242880}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}
                    className="py-0">
                <div>
                  <div>
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <FormInput placeholder="Tên sản phẩm"
                               id={'productName'}
                               maxlength={50}
                               invalid={this.state.errors['inputproductName']}
                               onChange={this.handleTextChange.bind(this, "productName")}
                               value={this.state.data.productName}
                               className="mb-2"/>
                    <span htmlFor="productName"
                          className={'errors-form'}>{this.state.errors['productName']}</span>
                  </div>
                  <div>
                    <label htmlFor="productCode">Mã sản phẩm</label>
                    <FormInput placeholder="Mã sản phẩm"
                               id={'productCode'}
                               disabled={this.state.action === Constants.ACTION.UPDATE}
                               maxlength={10}
                               invalid={this.state.errors['inputproductCode']}
                               onChange={this.handleTextChange.bind(this, "productCode")}
                               value={this.state.data.productCode}
                               className="mb-2"/>
                    <span htmlFor="code"
                          className={'errors-form'}>{this.state.errors['productCode']}</span>
                  </div>
                  <div>
                    <label htmlFor="price">Giá</label>
                    <FormInput id={'price'} placeholder="Giá"
                               type={'number'}
                               max="10000000000"
                               min="1"
                               invalid={this.state.errors['inputprice']}
                               onChange={this.handleTextChange.bind(this, "price")}
                               value={this.state.data.price} className="mb-2"/>
                    <span htmlFor="price"
                          className={'errors-form'}>{this.state.errors['price']}</span>
                  </div>
                  <div>
                    <label htmlFor="salePrice">Giá</label>
                    <FormInput id={'salePrice'} placeholder="Gía Sale"
                               type={'number'}
                               max="10000000000"
                               min="1"
                               invalid={this.state.errors['inputsalePrice']}
                               onChange={this.handleTextChange.bind(this, "salePrice")}
                               value={this.state.data.salePrice}
                               className="mb-2"/>
                    <span htmlFor="price"
                          className={'errors-form'}>{this.state.errors['salePrice']}</span>
                  </div>
                  <div>
                    <label htmlFor="categoryId">Danh Mục</label>
                    <FormSelect
                      id={'categoryId'}
                      invalid={this.state.errors['selectcategoryId']}
                      value={this.state.data.category}
                      onChange={this.handleSelectChange.bind(this, "categoryId")}>
                      <option value="">-- Chọn Danh Mục --</option>
                      {this.state.lstCategory &&
                      this.state.lstCategory.map(item =>
                        <option
                          value={item.categoryId}>{item.categoryName}</option>
                      )}
                    </FormSelect>
                    <span htmlFor="categoryId"
                          className={'errors-form'}>{this.state.errors['categoryId']}</span>
                  </div>
                  <div>
                    <label htmlFor="status">Trạng thái</label>
                    <FormSelect
                      id={'status'}
                      invalid={this.state.errors['selectstatus']}
                      value={this.state.data.status}
                      onChange={this.handleSelectChange.bind(this, "status")}>
                      <option value="">-- Chọn Trạng Thái --</option>
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                    </FormSelect>
                    <span htmlFor="status"
                          className={'errors-form'}>{this.state.errors['status']}</span>
                  </div>
                  <div>
                    <label htmlFor="quantity">Số Lượng</label>
                    <FormInput id={'quantity'} placeholder="Số Lượng"
                               invalid={this.state.errors['inputquantity']}
                               max="100"
                               min="1"
                               type={'number'}
                               onChange={this.handleTextChange.bind(this, "quantity")}
                               value={this.state.data.quantity}
                               className="mb-2"/>
                    <span htmlFor="quantity"
                          className={'errors-form'}>{this.state.errors['quantity']}</span>
                  </div>
                  <div>
                    <label htmlFor="color">Màu sắc</label>
                    <FormInput id={'color'} placeholder="Màu sắc"
                               invalid={this.state.errors['inputcolor']}
                               onChange={this.handleTextChange.bind(this, "color")}
                               value={this.state.data.color} className="mb-2"/>
                    <span htmlFor="color"
                          className={'errors-form'}>{this.state.errors['color']}</span>
                  </div>
                  <div>
                    <label htmlFor="size">Size</label>
                    <div id={'size'}>
                      {lstDataSize.map((itemMap, index) => (
                        <FormCheckbox
                          key={index}
                          inline
                          checked={this.state.data.size.find(item => item === itemMap)}
                          onChange={this.handleCheckBoxChange.bind(this, itemMap)}
                        >
                          {itemMap}
                        </FormCheckbox>))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="orgin">Xuất xứ</label>
                    <FormInput placeholder="Xuất xứ"
                               id={'orgin'}
                               maxlength={10}
                               invalid={this.state.errors['inputorgin']}
                               onChange={this.handleTextChange.bind(this, "orgin")}
                               value={this.state.data.orgin} className="mb-2"/>
                    <span htmlFor="code"
                          className={'errors-form'}>{this.state.errors['orgin']}</span>
                  </div>
                  <div>
                    <label htmlFor="brand">Nơi sản xuất</label>
                    <FormInput placeholder="Nơi sản xuất"
                               id={'brand'}
                               maxlength={10}
                               invalid={this.state.errors['inputbrand']}
                               onChange={this.handleTextChange.bind(this, "brand")}
                               value={this.state.data.brand} className="mb-2"/>
                    <span htmlFor="code"
                          className={'errors-form'}>{this.state.errors['brand']}</span>
                  </div>
                  <div>
                    <label htmlFor="shortDescription">Mô tả ngắn</label>
                    <FormTextarea id="shortDescription"
                                  invalid={this.state.errors['inputshortdescription']}
                                  onChange={this.handleTextChange.bind(this, "shortDescription")}
                                  value={this.state.data.shortDescription}
                                  className="mb-2"
                                  rows="5"/>
                    <span htmlFor="shortDescription"
                          className={'errors-form'}>{this.state.errors['shortDescription']}</span>
                  </div>
                  <div>
                    <label htmlFor="description">Mô tả</label>
                    <FormTextarea id="description"
                                  invalid={this.state.errors['inputdescription']}
                                  onChange={this.handleTextChange.bind(this, "description")}
                                  value={this.state.data.description}
                                  className="mb-2"
                                  rows="5"/>
                    <span htmlFor="description"
                          className={'errors-form'}>{this.state.errors['description']}</span>
                  </div>
                  <div style={{marginTop: 10, textAlign: 'right'}}>
                    <Button onClick={this.onSubmit}>Lưu sản phẩm</Button>
                    <Link to={'/product'}>
                      <Button style={{marginLeft: 10}} theme="secondary">Quay
                        lại</Button>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AddProduct;
