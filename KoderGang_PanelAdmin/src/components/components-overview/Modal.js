import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "shards-react";

export var showMessage = function (_message, _title = 'Thông Báo',) {
  this.setState({
    title: _title,
    message: _message,
    open: true
  })
};
export var showConfirm = function (_message, _onConfirm, _title = 'Thông Báo') {
  this.setState({
    title: _title,
    message: _message,
    open: true,
    showConfirm: true,
    onConfirm: _onConfirm
  })
};
export var showContent = function (_content, _onConfirm, _title = 'Thêm Mới') {
  this.setState({
    title: _title,
    content: _content,
    open: true,
    showConfirm: true,
    showContent: true,
    onConfirm: _onConfirm
  })
};
export var showError = function (_message, _title = 'Thông Báo',) {
  this.setState({
    title: _title,
    message: _message,
    colorHeader: '#AD1535',
    open: true,
  })
};
export default class ModalCustoms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    showMessage = showMessage.bind(this);
    showError = showError.bind(this);
    showConfirm = showConfirm.bind(this);
    showContent = showContent.bind(this);
  }

  onClose = () => {
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    const {open} = this.state;
    return (
      <div>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader
            style={{
              backgroundColor: `${this.state.colorHeader ? this.state.colorHeader : '#2961ff'}`,
            }}>{this.state.title}</ModalHeader>
          <ModalBody>{this.state.showContent ? this.state.content : this.state.message}</ModalBody>
          <ModalFooter>
            {this.state.showConfirm &&
            <Button
              onClick={this.state.onConfirm}>{this.state.showContent ? 'Lưu' : 'Đồng ý'}</Button>}
            <Button onClick={this.onClose} theme="secondary">Đóng</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
