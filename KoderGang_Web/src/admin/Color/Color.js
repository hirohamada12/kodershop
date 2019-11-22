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
import ColorDetail from "./ColorDetail";
import ColorService from "../../services/ColorService";

class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: [],
            data: {
                status: 'ACTIVE',
                color: ''
            },
            errors: [],
        };
        this.colorService = new ColorService();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        this.onLoadData()
    }


    onLoadData = () => {
        this.colorService.getAll({}, result => {
            this.setState({
                color: result.data
            })
        })
    };
    onDelete = (data) => {
        showConfirm("Bạn có muốn xóa màu sắc này không ?", () => {
            this.colorService.delete(data, () => {
                this.onLoadData();
                showMessage("Xóa màu sắc thành công")
            })
        })
    };
    onUpdate = (row) => {
        showContent(<ColorDetail data={row} onLoad={this.onLoadData}
                                 action={Constants.ACTION.UPDATE}/>, 'Thêm mới màu sắc')
    };
    onInsert = () => {
        showContent(<ColorDetail data={{
            color: '',
            status: 'ACTIVE'
        }} onLoad={this.onLoadData} action={Constants.ACTION.INSERT}/>, 'Thêm mới màu sắc')
    };

    render() {
        const columns = [
            {
                maxWidth: 75,
                Header: 'No.',
                accessor: 'colorId'
            },
            {
                sortable: false,
                Header: 'Màu sắc',
                accessor: 'color'
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
                                    <h4>Màu sắc</h4>
                                </div>
                                <div className="mb-4">
                                    <Button color="primary" onClick={this.onInsert}>Thêm mới màu sắc</Button>
                                </div>
                                <ReactTable className="invoices-table"
                                            data={this.state.color}
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

export default Color;
