/**
 * product add page
 */
/* eslint-disable */
import React from 'react';
import Constants from "../../common/Constants";
import {hideDialog} from "../../components/modal/ModalContent";
import {Button, Input, ModalBody, ModalFooter} from 'reactstrap';
import {showMessage} from "../../components/modal/Modal";
import {onChangeValue} from "../../common/Util";
import SizeService from "../../services/SizeService";

class SizeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                size: '',
                status: 'ACTIVE'
            },
            errors: [],
        };
        this.service = new SizeService();
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
                            size: '',
                            status: 'ACTIVE'
                        }
                    });
                    showMessage("Thêm mới kích cỡ thành công")
                })
            } else {
                this.service.update(this.state.data, () => {
                    hideDialog();
                    this.props.onLoad();
                    this.setState({
                        data: {
                            size: '',
                            status: 'ACTIVE'
                        }
                    });
                    showMessage("Cập nhật kích cỡ thành công")
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
        if (!data['size']) {
            isValid = false;
            errors['size'] = 'Kích cỡ không được rỗng không được rỗng';
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
                    <label>Kích cỡ</label>
                    <Input type="text" class="form-control" name="size"
                           value={this.state.data.size}
                           onChange={this.handleTextChange.bind(this, 'size')}
                           placeholder="Kích thước"/>
                    <span className="errors">{this.state.errors["size"]}</span>
                    <br/>
                    <label>Trạng Thái</label>
                    <select onChange={this.handleSelectChange.bind(this, "status")} name="rows"
                            className="select2 w-100 d-block"
                            value={this.state.data.status}>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">InActive</option>
                    </select>
                    <span className="errors">{this.state.errors["status"]}</span>
                </ModalBody>
                <ModalFooter className="justify-content-start pt-4">
                    <Button onClick={this.onSubmit} className="action-button btn-primary">Lưu</Button>
                    <Button className="action-button no" href="#" onClick={this.onClose}>Đóng</Button>
                </ModalFooter>
            </div>
        )
    }
}

export default SizeDetail;
