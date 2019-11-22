/**
 * product add page
 */
/* eslint-disable */
import React from 'react';
import {
  Button,
  Col,
  Container,
  FormInput,
  FormSelect,
  ModalBody,
  ModalFooter,
  Row
} from "shards-react";
import {onChangeValue} from "../../utils/Util";
import {hideModalContent} from "../../components/components-overview/ModalContent";
import CategoryService from "../../service/CategoryService";
import {showMessage} from "../../components/components-overview/Modal";
import Constants from "../../common/Constants";

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
      errors: [],
    };
    this.service = new CategoryService();
  }

  UNSAFE_componentWillMount() {
    this.setState(prevState => ({
      ...prevState,
      data: this.props.data,
      action: this.props.action
    }));
  }

  onSubmit = () => {
    if (this.validate()) {
      if (this.state.action === Constants.ACTION.INSERT) {
        this.service.insert(this.state.data, () => {
          hideModalContent();
          this.props.onLoad();
          showMessage("Thêm mới danh mục thành công")
        })
      } else {
        this.service.update(this.state.data, () => {
          hideModalContent();
          this.props.onLoad();
          showMessage("Cập nhật danh mục thành công")
        })
      }
    }
  };
  onClose = () => {
    hideModalContent();
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
    if (!data['categoryName']) {
      isValid = false;
      errors['categoryName'] = 'Tên danh mục không được rỗng';
      errors['inputcategoryName'] = true
    }
    if (!data['status']) {
      isValid = false;
      errors['status'] = 'Chọn trạng thái';
      errors['inputcategorystatus'] = true
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
      <div>
        <ModalBody>
          <Container className="dr-example-container">
            <Row>
              <Col sm="12" lg="6">
                <label htmlFor="categoryName">Tên Danh Mục</label>
                <FormInput id={'categoryName'} placeholder="Tên Danh Mục"
                           maxLenght={10}
                           invalid={this.state.errors['inputcategoryName']}
                           onChange={this.handleTextChange.bind(this, "categoryName")}
                           value={this.state.data.categoryName}
                           className="mb-2"/>
                <span htmlFor="categoryName"
                      className={'errors-form'}>{this.state.errors['categoryName']}
            </span>
                <label htmlFor="categoryCode">Mã Danh Mục</label>
                <FormInput id={'categoryCode'} placeholder="Mã Danh Mục"
                           maxLenght={10}
                           disabled={this.state.action === Constants.ACTION.UPDATE}
                           invalid={this.state.errors['inputcategoryCode']}
                           onChange={this.handleTextChange.bind(this, "categoryCode")}
                           value={this.state.data.categoryCode}
                           className="mb-2"/>
                <span htmlFor="price"
                      className={'errors-form'}>{this.state.errors['categoryCode']}</span>
              </Col>
              <Col sm="12" lg="6">
                <label htmlFor="description">Mô Tả</label>
                <FormInput id={'description'} placeholder="Mô tả"
                           maxLenght={10}
                           onChange={this.handleTextChange.bind(this, "description")}
                           value={this.state.data.description}
                           className="mb-2"/>
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
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={this.onSubmit}>Lưu</Button>
          <Button onClick={this.onClose} theme="secondary">Đóng</Button>
        </ModalFooter>
      </div>
    )
  }
}

export default AddCategory;
