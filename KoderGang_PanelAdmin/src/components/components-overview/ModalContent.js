import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "shards-react";

export var showContent = function (_content, _onConfirm, _title = 'Thêm mới') {
  this.setState({
    title: _title,
    content: _content,
    open: true,
    showConfirm: true,
    onConfirm: _onConfirm
  })
};
export var hideModalContent = function () {
  this.setState({
    open: !this.state.open,
  })
};

export default class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    showContent = showContent.bind(this);
    hideModalContent = hideModalContent.bind(this);
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
          <ModalHeader style={{
            backgroundColor: '#2961ff',
          }}>{this.state.title}</ModalHeader>
          <ModalBody>{this.state.content}</ModalBody>
          <ModalFooter>
            <Button
              onClick={this.state.onConfirm}>Lưu</Button>
            <Button onClick={this.onClose} theme="secondary">Đóng</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
