/**
 *  Admin Invoive Page
 */
import React, {Component} from 'react';
import {Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import OrderService from "../services/OrderService";
import {showMessage} from "../components/modal/Modal";
import OrderDetailService from "../services/OrderDetailService";

class Invoices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modal1: false,
            dropdownOpen: false,
            isOpen: false,
            invoices: [],
            searchProduct: '',
            invoiceview: {},
            invoiceDetail: {}
        };
        this.service = new OrderService();
        this.serviceOrderDetail = new OrderDetailService();
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggle1() {
        this.setState(prevState => ({
            modal1: !prevState.modal1
        }));
    }

    loadinvoices = async () => {
        await this.service.getAll({}, result => {
            this.setState({
                invoices: result.data
            })
        })
    };

    componentDidMount = async () => {
        await this.loadinvoices();
        window.scrollTo(0, 0)
    };

    onSearchProduct(searchText) {
        if (searchText === '') {
            this.setState({
                ...this.state,
                invoices: this.state.invoices,
                searchProduct: searchText
            })
        } else {
            let SearchBuyer = this.state.invoices.filter((invo) => {
                if (searchText === searchText.toLowerCase()) {
                    let buyer = invo.buyer.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                    return (
                        buyer
                    )
                } else {
                    let buyer = invo.buyer.toUpperCase().indexOf(searchText.toUpperCase()) > -1
                    return (
                        buyer
                    )
                }
            });
            this.setState({
                ...this.state,
                searchProduct: searchText,
                invoices: SearchBuyer
            })
        }
    }

    onDeleteInvoicePopup(data) {
        this.data = data;
        this.toggle1();
    }

    onDeleteInvoice(data) {
        this.data.status = "CANCEL";
        this.service.update(this.data, () => {
            this.toggle1();
            showMessage("Hủy đơn hàng thành công")
        })
    }

    onViewInvoicePopup = async (data) => {
        console.log(data);
        await this.serviceOrderDetail.getOrderDetail({
            orderId: data.orderId
        }, async result => {
            await this.setState({
                invoiceDetail: result.data,
                invoiceView: data,
            });
        });
        this.toggle();
    };

    updateInvoice = (data) => {
        data.status = 'SEND';
        this.service.update(data, () => {
            showMessage("Cập nhật đơn hàng thành công")
        })
    };

    render() {
        const viewInvoice = this.state.invoiceview;
        const invoiceDetail = this.state.invoiceDetail;
        const columns = [
            {
                maxWidth: 75,
                Header: 'No.',
                accessor: 'orderId'
            },
            {
                sortable: false,
                Header: 'Người mua',
                accessor: 'userName'
            },
            {
                minWidth: 160,
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Địa chỉ',
                accessor: 'address',
            },
            {
                Header: 'Điện Thoại',
                accessor: 'phone',
            },
            {
                Header: 'Tổng giá trị',
                accessor: 'total',
                Cell: props => <span className='number'>{props.original.total.toLocaleString()} đ</span>
            },
            {
                Header: 'Trạng Thái',
                accessor: 'status',
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: props => {
                    return (
                        <div>
                            <Link to={"#"} className="view-button"
                                  onClick={() => this.onViewInvoicePopup(props.original)}> Xem Đơn Hàng <i
                                className="fa fa-eye pl-2"/></Link>
                            <Link to={"#"} style={{marginLeft: 5}} className="view-button"
                                  onClick={() => this.updateInvoice(props.original)}> Giao hàng <i
                                className="fa fa-paper-plane"/></Link>
                            {props.original.status !== 'SEND' && <Link to={"#"} className="delete-button"
                                                                       onClick={() => this.onDeleteInvoicePopup(props.original)}
                            >Hủy đơn hàng <i className="fa fa-trash-o pl-2"/>
                            </Link>}
                        </div>
                    )
                },
            }
        ];

        return (
            <div>
                <div className="section-ptb">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-0">
                                    <h4>Đơn Hàng</h4>
                                </div>
                                <div className="mb-4">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Tìm kiếm đơn hàng"
                                                   value={this.state.searchProduct}
                                                   onChange={(e) => this.onSearchProduct(e.target.value)}/>
                                        </div>
                                    </form>
                                </div>
                                <ReactTable className="invoices-table"
                                            data={this.state.invoices}
                                            columns={columns}
                                            minRows={1}
                                            defaultPageSize={5}
                                />
                                {/* modal-view */}
                                <Modal isOpen={this.state.modal} toggle={this.toggle}
                                       className="modal-view modal-lg modal-dialog-centered">
                                    <ModalHeader toggle={this.toggle}/>
                                    {viewInvoice && invoiceDetail ?
                                        <ModalBody>
                                            <div className="success-screen">
                                                <div className="thank-you text-center">
                                                    <i className="fa fa-check-circle-o"></i>
                                                    <h1 className="text-white">Chi tiết đơn hàng</h1>
                                                    <strong className="text-white">Giao dịch
                                                        Mã giao dịch:{viewInvoice.orderId}</strong>
                                                </div>
                                                <div className="delivery p-4 p-md-5 bg-light text-center">
                                                    <span className="h5">Ngày Giao Dịch</span>
                                                    <h2 className="mb-0 mt-2">{viewInvoice.createDate}</h2>
                                                </div>
                                                <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h6>Giao tới</h6>
                                                            <p className="list-unstyled mb-0">
                                                                {viewInvoice.address}
                                                            </p>
                                                        </Col>
                                                        <Col lg={6} className="text-lg-right mt-4 mt-lg-0">
                                                            <h6>Summary</h6>
                                                            <ul className="list-unstyled mb-0">
                                                                <li><span>Mã đơn hàng:</span>
                                                                    <strong>{viewInvoice.orderId}</strong></li>
                                                                <li><span>Ngày tạp:</span>
                                                                    <strong>{viewInvoice.createDate}</strong></li>
                                                                <li><span>Tổng:</span>
                                                                    <strong>{viewInvoice.total && viewInvoice.total.toLocaleString()}đ</strong>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="ordered-detail">
                                                    <h5 className="mb-4">Sản phẩm</h5>
                                                    <div className="table-responsive">
                                                        <table className="table mb-0">
                                                            <tbody>
                                                            <tr className="ordered-item">
                                                                {invoiceDetail.productListPicture ?
                                                                    <td className="ordered-image">
                                                                        <img
                                                                            src={invoiceDetail.productListPicture[0]}
                                                                            className="img-fluid" alt={""}/>
                                                                    </td>
                                                                    :
                                                                    null
                                                                }

                                                                <td className="ordered-name">
                                                                    <h6 className="mb-0">Tên sản phẩm</h6>
                                                                    <span>{invoiceDetail.productName}</span>
                                                                </td>
                                                                <td className="ordered-quantity">
                                                                    <h6 className="mb-0">Số lượng</h6>
                                                                    <span>{invoiceDetail.quantity}</span>
                                                                </td>
                                                                <td className="ordered-price">
                                                                    <h6 className="mb-0">Tổng</h6>
                                                                    <span>{invoiceDetail.productTotal && invoiceDetail.productTotal.toLocaleString()}đ</span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="table-responsive">
                                                        <table className="table total-table table-borderless mt-4 mb-0">
                                                            <tbody>
                                                            <tr>
                                                                <td>Giá Sản phẩm</td>
                                                                <td className="text-right">{invoiceDetail.productPrice && invoiceDetail.productPrice.toLocaleString()}đ</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Giao hàng</td>
                                                                <td className="text-right">{Number(30000).toLocaleString()}đ</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </ModalBody>
                                        :
                                        null
                                    }
                                </Modal>

                                {/* modal-delete */}
                                <Modal isOpen={this.state.modal1} toggle={this.toggle1}
                                       className="modal-delete modal-lg modal-dialog-centered">
                                    <ModalHeader toggle={this.toggle1}/>
                                    <ModalBody>
                                        Bạn có chắc muốn hủy đơn hàng này không
                                    </ModalBody>
                                    <ModalFooter className="justify-content-center pt-4">
                                        <Link className="action-button" to="#"
                                              onClick={(res) => this.onDeleteInvoice(res)}>Đồng ý</Link>
                                        <Link className="action-button no" to="#" onClick={this.toggle1}>Đóng</Link>
                                    </ModalFooter>
                                </Modal>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )

    }
}

export default Invoices;
