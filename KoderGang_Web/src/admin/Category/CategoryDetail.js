/**
 * product add page
 */
/* eslint-disable */
import React from 'react';
import Constants from "../../common/Constants";
import {hideDialog} from "../../components/modal/ModalContent";
import {Button, Input, ModalBody, ModalFooter} from 'reactstrap';
import CategoryService from "../../services/CategoryService";
import {showMessage} from "../../components/modal/Modal";
import {onChangeValue} from "../../common/Util";

class CategoryDetail extends React.Component {
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
                    hideDialog();
                    this.props.onLoad();
                    this.setState({
                        data: {
                            categoryCode: '',
                            categoryName: '',
                            description: '',
                            createDate: '',
                            status: ''
                        }
                    });
                    showMessage("Thêm mới danh mục thành công")
                })
            } else {
                this.service.update(this.state.data, () => {
                    hideDialog();
                    this.props.onLoad();
                    this.setState({
                        data: {
                            categoryCode: '',
                            categoryName: '',
                            description: '',
                            createDate: '',
                            status: ''
                        }
                    });
                    showMessage("Cập nhật danh mục thành công")
                })
            }
        }
    };
    onClose = () => {
        hideDialog();
    };
    validate = () => {
        let data = this.state.data;
        let isValid = true;
        let errors = [];
        if (!data['categoryCode']) {
            isValid = false;
            errors['categoryCode'] = 'Mã danh mục không được rỗng';
        }
        if (!data['categoryName']) {
            isValid = false;
            errors['categoryName'] = 'Tên danh mục không được rỗng';
        }
        if (!data['status']) {
            isValid = false;
            errors['status'] = 'Chọn trạng thái';
        }
        this.setState({
            errors: errors
        });
        return isValid
    };

    handleTextChange = (name, e) => {
        onChangeValue(this, name, e)
    };
    handleSelectChange = (name, e) => {
        onChangeValue(this, name, e)
    };

    render() {
        return (
            <div>
                <ModalBody>
                    <label>Mã Danh Mục</label>
                    <Input type="text" name="categoryCode"
                           value={this.state.data.categoryCode}
                           onChange={this.handleTextChange.bind(this, 'categoryCode')}
                           placeholder="Mã danh mục"
                           disabled={this.state.action === Constants.ACTION.UPDATE}/>
                    <span className="errors">{this.state.errors["categoryCode"]}</span>
                    <br/>
                    <label>Tên Danh Mục</label>
                    <Input type="text" class="form-control" name="categoryName"
                           value={this.state.data.categoryName}
                           onChange={this.handleTextChange.bind(this, 'categoryName')}
                           placeholder="Tên danh mục"/>
                    <span className="errors">{this.state.errors["categoryName"]}</span>
                    <br/>
                    <label>Mô Tả</label>
                    <Input type="text" className="form-control" name="description"
                           value={this.state.data.description}
                           onChange={this.handleTextChange.bind(this, 'description')}
                           placeholder="Mô Tả"/>
                    <span className="errors">{this.state.errors["description"]}</span>
                    <br/>
                    <label>Trạng Thái</label>
                    <select onChange={this.handleSelectChange.bind(this, "status")} name="rows"
                            className="select2 w-100 d-block"
                            value={this.state.data.status}>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">InActive</option>
                    </select>
                </ModalBody>
                <ModalFooter className="justify-content-start pt-4">
                    <Button onClick={this.onSubmit} className="action-button btn-primary">Lưu</Button>
                    <Button className="action-button no" href="#" onClick={this.onClose}>Đóng</Button>
                </ModalFooter>
            </div>
        )
    }
}

export default CategoryDetail;
