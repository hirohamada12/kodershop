import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "shards-react";
import ReactTable from 'react-table';
import PageTitle from "../../components/common/PageTitle";
import 'react-table/react-table.css'
import {
  showConfirm,
  showMessage
} from "../../components/components-overview/Modal";
import {
  hideModalContent,
  showContent
} from "../../components/components-overview/ModalContent";
import AddCategory from "./AddCategory";

const Product = (props) => {
  const columns = [
    {
      maxWidth: 50,
      Header: 'STT',
      accessor: 'id',
      getProps: (state, rowInfo, column) => {
        return {
          style: {
            textAlign: 'center'
          },
        };
      },
    },
    {
      sortable: false,
      maxWidth: 120,
      Header: 'Mã Danh Mục',
      accessor: 'categoryCode',
    },
    {
      minWidth: 120,
      Header: 'Tên Danh Mục',
      accessor: 'categoryName',
    },
    {
      minWidth: 150,
      Header: 'Mô Tả',
      accessor: 'description',
    },
    {
      Header: 'Thời gian tạo',
      accessor: 'createTime',
    },
    {
      Header: 'Trạng thái',
      accessor: 'status',
    },
    {
      Header: 'Hành Động',
      Cell: props => {
        console.log('props.id', props.row.id);
        return (
          <div>
            <Button onClick={() => {
              onEdit(props.row)
            }} size="sm" theme="primary" className="mb-2 mr-1">
              <i className="material-icons primary-color">edit</i>
            </Button>
            <Button size="sm" theme="danger" className="mb-2 mr-1"
                    onClick={() => onDeleteProductItem(props.row.id)}>
              <i className="material-icons active-color">delete</i>
            </Button>
          </div>
        )
      },
    }
  ];
  const onDeleteProductItem = (id) => {
    showConfirm('Bạn có muốn xóa danh mục này không?', () => {
      showMessage("Xóa sản phẩm thành công")
    })
  };
  const onInsert = () => {
    showContent(<AddCategory/>, async () => {
      await hideModalContent();
      showMessage("Lưu sản phẩm thành công")
    }, 'Thêm mới danh mục')
  };
  const onEdit = (data) => {
    showContent(<AddCategory data={data}/>, async () => {
      await hideModalContent();
      showMessage("Lưu sản phẩm thành công")
    }, 'Thêm mới danh mục')
  };
  const dataProduct = [
    {
      id: 1,
      categoryName: "Áo",
      categoryCode: "AO",
      description: 'Các sản phẩm quần áo',
      createTime: "30/10/2019",
      status: 'Active',
    }, {
      id: 1,
      categoryName: "Quần",
      categoryCode: "QUAN",
      description: 'Các sản phẩm quần',
      createTime: "30/10/2019",
      status: 'Active',
    }, {
      id: 1,
      categoryName: "Phụ kiện",
      categoryCode: "PK",
      description: 'Các sản phẩm phụ kiện',
      createTime: "30/10/2019",
      status: 'Active',
    },
  ];
  return (
    <Container fluid style={{backgroundColor: '#FFF'}}
               className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-12">
        <PageTitle style={{textAlign: 'center', marginTop: 20}} sm="12"
                   subtitle="Danh Mục"/>
        <Row style={{marginTop: 10, width: '100%'}} noGutters
             className="page-header py-12">
          <Col lg={12} md={12}>
            <Card className="mb-5">
              <div style={{width: 200}}>
                <Button theme="primary"
                        onClick={onInsert}
                        className="mb-2 mr-1">
                  <i className="material-icons">add</i> Thêm mới
                </Button>
              </div>
              <CardBody className="p-0 pb-3">
                <ReactTable
                  data={dataProduct}
                  columns={columns}
                  defaultPageSize={10}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Product;
