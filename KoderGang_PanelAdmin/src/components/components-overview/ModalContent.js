import React from "react";
import {Modal, ModalHeader} from "shards-react";

export var showContent = function (_content, _title = 'Thêm mới') {
  this.setState({
    title: _title,
    content: _content,
    open: true,
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
          {this.state.content}
        </Modal>
      </div>
    );
  }
}
