/**
 *  Admin Invoive Page
 */
import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import CategoryService from "../../services/CategoryService";
import {showConfirm, showMessage} from "../../components/modal/Modal";
import {showContent} from "../../components/modal/ModalContent";
import CategoryDetail from "./CategoryDetail";
import Constants from "../../common/Constants";

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            data: {
                status: 'ACTIVE',
                categoryCode: '',
                categoryName: '',
                description: ''
            },
            errors: [],
        };
        this.categoryService = new CategoryService();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        this.onLoadData()
    }


    onLoadData = () => {
        this.categoryService.getAll({}, result => {
            this.setState({
                category: result.data
            })
        })
    };
    onDelete = (data) => {
        showConfirm("Bạn có muốn xóa danh mục này không ?", () => {
            this.categoryService.delete(data, () => {
                this.onLoadData();
                showMessage("Xóa danh mục thành công")
            })
        })
    };
    onUpdate = (row) => {
        showContent(<CategoryDetail data={row} onLoad={this.onLoadData}
                                    action={Constants.ACTION.UPDATE}/>, 'Thêm mới danh mục')
    };
    onInsert = () => {
        showContent(<CategoryDetail data={{
            categoryCode: '',
            categoryName: '',
            description: '',
            createDate: '',
            status: ''
        }} onLoad={this.onLoadData} action={Constants.ACTION.INSERT}/>, 'Thêm mới danh mục')
    };

    render() {
        const columns = [
            {
                maxWidth: 75,
                Header: 'No.',
                accessor: 'categoryId'
            },
            {
                sortable: false,
                Header: 'Mã Danh Mục',
                accessor: 'categoryCode'
            },
            {
                minWidth: 160,
                Header: 'Tên Danh Mục ',
                accessor: 'categoryName',
            },
            {
                Header: 'Mô tả',
                accessor: 'description',
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
                                    <h4>Danh Mục</h4>
                                </div>
                                <div className="mb-4">
                                    <Button color="primary" onClick={this.onInsert}>Thêm mới danh mục</Button>
                                </div>
                                <ReactTable className="invoices-table"
                                            data={this.state.category}
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

export default Category;
