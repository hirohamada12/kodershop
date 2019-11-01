import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "shards-react";
import {NavLink} from 'react-router-dom';
import ReactTable from 'react-table';
import PageTitle from "../../components/common/PageTitle";
import 'react-table/react-table.css'
import {
  showConfirm,
  showMessage
} from "../../components/components-overview/Modal";

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
      maxWidth: 100,
      Header: 'Hình ảnh',
      accessor: 'image',
      Cell: props =>
        <span>
          <img src={require(`../../assets/images/${props.row.image}`)}
               alt="client-avatar" width="40" height="40"/>
               </span>
    },
    {
      minWidth: 150,
      Header: 'Tên sản phẩm',
      accessor: 'name',
    },
    {
      minWidth: 120,
      Header: 'Màu Sắc',
      accessor: 'color',
    },
    {
      Header: 'Danh mục',
      accessor: 'category',
    },
    {
      Header: 'Mã sản phẩm',
      accessor: 'code',
    },
    {
      Header: 'Số lượng',
      accessor: 'quantity',
    },
    {
      Header: 'Giá',
      accessor: 'price',
    },
    {
      Header: 'Mô Tả',
      show: false,
      accessor: 'description',
    },
    {
      Header: 'Size',
      show: false,
      accessor: 'lstSize',
    },
    {
      Header: 'Images',
      show: false,
      accessor: 'images',
    },
    {
      Header: 'Hành Động',
      Cell: props => {
        console.log('props.id', props.row.id);
        return (
          <div>
            <NavLink to={{
              pathname: `/add-product/${props.row.id}`,
              data: props.row
            }}>
              <Button size="sm" theme="primary" className="mb-2 mr-1">
                <i className="material-icons primary-color">edit</i>
              </Button>
            </NavLink>
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
    showConfirm('Bạn có muốn xóa sản phẩm này không', () => {
      showMessage("Xóa sản phẩm thành công")
    })
  };
  const dataProduct = [
    {
      id: 1,
      image: 'product_1.jpg',
      images: ['product_1.jpg', 'product_1.jpg', 'product_1.jpg', 'product_1.jpg'],
      name: "Product One",
      category: "MEN",
      code: 'CHANNEL',
      productCode: "HN1DA",
      price: '1000',
      color: 'Đỏ',
      quantity: 1,
      description: 'Chất liệu nỉ',
      lstSize: ['35', '36']
    }, {
      id: 2,
      name: "Product One",
      image: 'product_1.jpg',
      images: ['product_1.jpg', 'product_1.jpg', 'product_1.jpg', 'product_1.jpg'],
      category: "MEN",
      code: 'CHANNEL',
      productCode: "HN1DA",
      price: '1000',
      color: 'Đỏ',
      quantity: 1,
      description: 'Chất liệu nỉ',
      lstSize: ['35', '36']
    }, {
      id: 3,
      name: "Product One",
      image: 'product_1.jpg',
      images: ['product_1.jpg', 'product_1.jpg', 'product_1.jpg', 'product_1.jpg'],
      category: "MEN",
      code: 'CHANNEL',
      productCode: "HN1DA",
      price: '1000',
      color: 'Đỏ',
      quantity: 1,
      description: 'Chất liệu nỉ',
      lstSize: ['35', '36']
    }, {
      id: 4,
      name: "Product One",
      category: "MEN",
      image: 'product_1.jpg',
      images: ['product_1.jpg', 'product_1.jpg', 'product_1.jpg', 'product_1.jpg'],
      code: 'CHANNEL',
      productCode: "HN1DA",
      price: '1000',
      color: 'Đỏ',
      quantity: 1,
      description: 'Chất liệu nỉ',
      lstSize: ['35', '36']
    }
  ];
  return (
    <Container fluid style={{backgroundColor: '#FFF'}}
               className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-12">
        <PageTitle style={{textAlign: 'center', marginTop: 20}} sm="12"
                   subtitle="Sản Phẩm"/>
        <Row style={{marginTop: 10, width: '100%'}} noGutters
             className="page-header py-12">
          <Col lg={12} md={12}>
            <Card className="mb-5">
              <NavLink to={{
                pathname: '/add-product/new',
                data: {}
              }}>
                <Button theme="primary"
                        className="mb-2 mr-1">
                  <i className="material-icons">add</i> Thêm Mới
                  Sản Phẩm
                </Button>
              </NavLink>
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
