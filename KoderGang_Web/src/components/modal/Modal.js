import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export var showMessage = function (_message, _title = 'Thông Báo',) {
    this.setState({
        title: _title,
        message: _message,
        open: true,
        colorHeader: '#2961ff',
        showConfirm: false,
    })
};

export var showConfirm = function (_message, _onConfirm, _title = 'Thông Báo') {
    this.setState({
        title: _title,
        message: _message,
        open: true,
        colorHeader: '#FFE222',
        showConfirm: true,
        onConfirm: _onConfirm
    })
};
export var hideDialog = function () {
    this.setState({
        open: false,
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
        open: true,
        showConfirm: false,
    })
};
export default class ModalCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        showMessage = showMessage.bind(this);
        showError = showError.bind(this);
        showConfirm = showConfirm.bind(this);
        showContent = showContent.bind(this);
        hideDialog = hideDialog.bind(this);
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
                <Modal isOpen={open} toggle={this.onClose} className="modal-lg modal-dialog-centered">
                    <ModalHeader className="justify-content-center pt-4" toggle={this.onClose}>
                        {this.state.title}
                    </ModalHeader>
                    <ModalBody className={"justify-content-center pt-4"}>
                        {this.state.message}
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        {this.state.showConfirm &&
                        <Button color="primary" onClick={this.state.onConfirm}>Đồng Ý </Button>}
                        <Button color="secondary" onClick={this.onClose}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
