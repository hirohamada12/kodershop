import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "shards-react";
import ReactTable from 'react-table';
import PageTitle from "../../components/common/PageTitle";
import 'react-table/react-table.css'
import {
  showConfirm,
  showMessage
} from "../../components/components-overview/Modal";

const Order = (props) => {
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
      Header: 'Mã Đơn Hàng',
      accessor: 'orderCode',
    },
    {
      minWidth: 120,
      Header: 'Tên đơn hàng',
      accessor: 'orderName',
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
  const onEdit = () => {

  };
  const onDeleteProductItem = (id) => {
    showConfirm('Bạn có muốn hủy đơn hàng này không?', () => {
      showMessage("Xóa sản phẩm thành công")
    })
  };
  const dataProduct = [
    {
      id: 1,
      orderCode: "31237",
      orderName: "Đơn hàng của Nhật Anh",
      description: '165 Dương Quảng Hàm, Hà nội',
      createTime: "30/10/2019",
      status: 'Đang Giao',
    }, {
      id: 2,
      orderCode: "31238",
      orderName: "Đơn hàng của Nhật Anh",
      description: '165 Dương Quảng Hàm, Hà nội',
      createTime: "30/10/2019",
      status: 'Đang Giao',
    }, {
      id: 3,
      orderCode: "31239",
      orderName: "Đơn hàng của Nhật Anh",
      description: '165 Dương Quảng Hàm, Hà nội',
      createTime: "30/10/2019",
      status: 'Đã Giao',
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

export default Order;
