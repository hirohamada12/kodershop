/**
 *  Admin Invoive Page
 */
import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import {showConfirm, showMessage} from "../../components/modal/Modal";
import {showContent} from "../../components/modal/ModalContent";
import Constants from "../../common/Constants";
import ColorService from "../../services/ColorService";
import SizeService from "../../services/SizeService";
import SizeDetail from "./SizeDetail";

class Size extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: [],
            data: {
                status: 'ACTIVE',
                size: ''
            },
            errors: [],
        };
        this.service = new SizeService();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        this.onLoadData()
    }


    onLoadData = () => {
        this.service.getAll({}, result => {
            this.setState({
                size: result.data
            })
        })
    };
    onDelete = (data) => {
        showConfirm("Bạn có muốn xóa kích cỡ này không ?", () => {
            this.service.delete(data, () => {
                this.onLoadData();
                showMessage("Xóa kích cỡ thành công")
            })
        })
    };
    onUpdate = (row) => {
        showContent(<SizeDetail data={row} onLoad={this.onLoadData}
                                 action={Constants.ACTION.UPDATE}/>, 'Thêm mới kích cỡ')
    };
    onInsert = () => {
        showContent(<SizeDetail data={{
            size: '',
            status: 'ACTIVE'
        }} onLoad={this.onLoadData} action={Constants.ACTION.INSERT}/>, 'Thêm mới kich cỡ')
    };

    render() {
        const columns = [
            {
                maxWidth: 75,
                Header: 'No.',
                accessor: 'sizeId'
            },
            {
                sortable: false,
                Header: 'Kích cỡ',
                accessor: 'size'
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
                                  onClick={() => this.onUpdate(props.original)}> Sửa <i
                                className="fa fa-pencil-square-o"></i></Link>
                            <a className="delete-button"
                               onClick={() => this.onDelete(props.original)}>Xóa <i className="fa fa-trash-o pl-2"></i>
                            </a>
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
                                    <h4>Kích cỡ</h4>
                                </div>
                                <div className="mb-4">
                                    <Button color="primary" onClick={this.onInsert}>Thêm mới kích cỡ</Button>
                                </div>
                                <ReactTable className="invoices-table"
                                            data={this.state.size}
                                            columns={columns}
                                            minRows={1}
                                            defaultPageSize={5}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )

    }
}

export default Size;
