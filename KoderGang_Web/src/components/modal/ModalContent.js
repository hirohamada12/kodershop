import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export var hideDialog = function () {
    this.setState({
        open: false,
    })
};
export var showContent = function (_content, _title = 'Thêm Mới') {
    this.setState({
        title: _title,
        content: _content,
        open: true,
        showConfirm: true,
    })
};
export default class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
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
                    {this.state.content}
                </Modal>
            </div>
        );
    }
}
