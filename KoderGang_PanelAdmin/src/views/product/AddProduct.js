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

import {showError} from "../../components/components-overview/Modal";

const lstDataSize = ['35', '36', '37', '38', '39', '40'];
const fs = require('browserify-fs');

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        code: '',
        price: '',
        category: '',
        quantity: '',
        color: '',
        description: '',
        image: '625x800.png',
        lstSize: [],
        images: ['625x800.png',
          '625x800.png',
          '625x800.png',
          '625x800.png'],
      },
      errors: []
    };
  }

  componentWillMount = () => {
    this.props.location.data && this.setState(prevState => ({
      data: {
        ...prevState.data,
        data: this.props.location.data._original,
      }
    }))
  };

  onSubmit = () => {
    if (this.validate()) {
      console.log(this.state.data);
    }
  };

  validate = () => {
    let data = this.state.data;
    let isValid = true;
    let errors = [];
    if (!data['name']) {
      isValid = false;
      errors['name'] = 'Tên sản phẩm không được rỗng';
      errors['inputname'] = true
    }
    if (data['name'] && data['name'].length > 50) {
      isValid = false;
      errors['name'] = 'Tên sản phẩm không được quá 50 kí tự';
      errors['inputname'] = true
    }
    if (!data['code']) {
      isValid = false;
      errors['code'] = 'Mã sản phẩm không được rỗng';
      errors['inputcode'] = true;
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
    if (!data['category']) {
      isValid = false;
      errors['category'] = 'Danh mục sản phẩm không được rỗng';
      errors['selectcategory'] = true;
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
    if (this.state.images.length < 1) {
      console.log(this.state.images.length < 1);
      showError('Bạn phải chọn ít nhất 1 ảnh cho sản phẩm');
      isValid = false;
    }
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
    console.log(lstSize);
    console.log(this.state.data.lstSize.find(item => item === size))
  };

  render() {
    if (!this.props.location.data) {
      return <Redirect push to="/product"/>;
    }
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
                      {this.state.data.images && this.state.data.images.map((image, index) => {
                        return (
                          <div key={index} className="product-gallery-item">
                            <div className="image-upload">
                              <a href="#">
                                <img
                                  src={`${require('../../assets/images/' + image)}`}
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
                                  value={`${require('../../assets/images/' + image)}`}
                                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                  maxFileSize={5242880}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Grid>
                  <Grid item xs={9} sm={10} md={10} lg={10} className="py-0">
                    <div className="product-gallery-nav">
                      <div className="product-gallery-item">
                        <div className="image-upload-big">
                          <a href="#">
                            <img
                              src={`${require('../../assets/images/' + this.state.data.image)}`}
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
                    <label htmlFor="name">Tên sản phẩm</label>
                    <FormInput placeholder="Tên sản phẩm"
                               id={'name'}
                               maxlength={50}
                               invalid={this.state.errors['inputname']}
                               onChange={this.handleTextChange.bind(this, "name")}
                               value={this.state.data.name}
                               className="mb-2"/>
                    <span htmlFor="name"
                          className={'errors-form'}>{this.state.errors['name']}</span>
                  </div>
                  <div>
                    <label htmlFor="code">Mã sản phẩm</label>
                    <FormInput placeholder="Mã sản phẩm"
                               id={'code'}
                               maxlength={10}
                               invalid={this.state.errors['inputcode']}
                               onChange={this.handleTextChange.bind(this, "code")}
                               value={this.state.data.code} className="mb-2"/>
                    <span htmlFor="code"
                          className={'errors-form'}>{this.state.errors['code']}</span>
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
                    <label htmlFor="category">Danh Mục</label>
                    <FormSelect
                      id={'category'}
                      invalid={this.state.errors['selectcategory']}
                      value={this.state.data.category}
                      onChange={this.handleSelectChange.bind(this, "category")}>
                      <option value="">-- Chọn Danh Mục --</option>
                      <option value="MEN">MEN</option>
                      <option value="WOMEN">WOMEN</option>
                      <option value="TS">
                        Trang sức
                      </option>
                    </FormSelect>
                    <span htmlFor="category"
                          className={'errors-form'}>{this.state.errors['category']}</span>
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
                          checked={this.state.data.lstSize.find(item => item === itemMap)}
                          onChange={this.handleCheckBoxChange.bind(this, itemMap)}
                        >
                          {itemMap}
                        </FormCheckbox>))}
                    </div>
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
