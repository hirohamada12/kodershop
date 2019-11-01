/**
 * product add page
 */
/* eslint-disable */
import React from 'react';
import {Col, Container, FormInput, FormSelect, Row} from "shards-react";
import {onChangeValue} from "../../utils/Util";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        categoryCode: '',
        categoryName: '',
        description: '',
        createDate: '',
        status: ''
      },
      errors: []
    };
  }

  onSubmit = () => {
    if (this.validate()) {
      console.log(this.state.data);
    }
  };

  validate = () => {
    let data = this.state.data;
    let isValid = true;
    let errors = [];
    if (!data['categoryCode']) {
      isValid = false;
      errors['categoryCode'] = 'Mã danh mục không được rỗng';
      errors['inputcategoryCode'] = true
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

  render() {
    return (
      <Container className="dr-example-container">
        <Row>
          <Col sm="12" lg="6">
            <label htmlFor="categoryName">Tên Danh Mục</label>
            <FormInput id={'categoryName'} placeholder="Mã Danh Mục"
                       maxLenght={10}
                       invalid={this.state.errors['inputcategoryName']}
                       onChange={this.handleTextChange.bind(this, "categoryName")}
                       value={this.state.data.categoryName} className="mb-2"/>
            <span htmlFor="categoryName"
                  className={'errors-form'}>{this.state.errors['categoryName']}
            </span>
            <label htmlFor="categoryCode">Mã Danh Mục</label>
            <FormInput id={'categoryCode'} placeholder="Mã Danh Mục"
                       maxLenght={10}
                       invalid={this.state.errors['inputcategoryCode']}
                       onChange={this.handleTextChange.bind(this, "categoryCode")}
                       value={this.state.data.categoryCode} className="mb-2"/>
            <span htmlFor="price"
                  className={'errors-form'}>{this.state.errors['categoryCode']}</span>
          </Col>
          <Col sm="12" lg="6">
            <label htmlFor="description">Mã Danh Mục</label>
            <FormInput id={'description'} placeholder="Mã Danh Mục"
                       maxLenght={10}
                       onChange={this.handleTextChange.bind(this, "description")}
                       value={this.state.data.description} className="mb-2"/>
            <span htmlFor="description"
                  className={'errors-form'}>{this.state.errors['description']}
            </span>
            <label htmlFor="status">Trạng Thái</label>
            <FormSelect
              id={'status'}
              invalid={this.state.errors['selectstatus']}
              value={this.state.data.category}
              onChange={this.handleSelectChange.bind(this, "status")}>
              <option value="">-- Chọn Trạng Thái --</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </FormSelect>
            <span htmlFor="status"
                  className={'errors-form'}>{this.state.errors['status']}</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddCategory;
