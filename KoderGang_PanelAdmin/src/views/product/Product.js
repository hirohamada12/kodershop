import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "shards-react";
import {NavLink} from 'react-router-dom';
import ReactTable from 'react-table';
import PageTitle from "../../components/common/PageTitle";
import 'react-table/react-table.css'
import {
  hideDialog,
  showConfirm,
  showMessage
} from "../../components/components-overview/Modal";
import ProductService from "../../service/ProductService";

const Product = (props) => {
  const service = new ProductService();
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    _onLoadData();
  }, []);

  const _onLoadData = async () => {
    await service.getAll({productName: ''}, result => {
      setDataProduct(result.data)
    });
  };
  const columns = [
    {
      maxWidth: 50,
      Header: 'STT',
      accessor: 'productId',
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
          <img src={require(`../../assets/images/product_1.jpg`)}
               alt="client-avatar" width="40" height="40"/>
               </span>
    },
    {
      minWidth: 150,
      Header: 'Tên sản phẩm',
      accessor: 'productName',
    },
    {
      minWidth: 120,
      Header: 'Màu Sắc',
      accessor: 'color',
    },
    {
      Header: 'Danh mục',
      accessor: 'categoryName',
    },
    {
      Header: 'Mã sản phẩm',
      accessor: 'productCode',
    },
    {
      Header: 'Hãng',
      accessor: 'brand',
    },
    {
      Header: 'Giá',
      accessor: 'price',
    },
    {
      Header: 'Giảm giá',
      accessor: 'price',
    },
    {
      Header: 'Mô Tả',
      show: true,
      accessor: 'shortDescription',
    },
    {
      Header: 'Trạng Thái',
      show: true,
      accessor: 'status',
    },
    {
      Header: 'Size',
      show: true,
      accessor: 'size',
    },
    {
      Header: 'Images',
      show: false,
      accessor: 'images',
    }, {
      Header: 'CategoryId',
      show: false,
      accessor: 'categoryId',
    },
    {
      Header: 'Hành Động',
      Cell: props => {
        let data = props.row;
        data.images = ['625x800.png',
          '625x800.png',
          '625x800.png',
          '625x800.png'];
        data.image = '625x800.png';
        return (
          <div>
            <NavLink to={{
              pathname: `/add-product/${props.row.productId}`,
              data: props.row
            }}>
              <Button size="sm" theme="primary" className="mb-2 mr-1">
                <i className="material-icons primary-color">edit</i>
              </Button>
            </NavLink>
            <Button size="sm" theme="danger" className="mb-2 mr-1"
                    onClick={() => onDeleteProductItem(props.row)}>
              <i className="material-icons active-color">delete</i>
            </Button>
          </div>
        )
      },
    }
  ];
  const onDeleteProductItem = (row) => {
    showConfirm('Bạn có muốn xóa sản phẩm này không', async () => {
      hideDialog();
      service.delete({productId: row.productId}, () => {
        showMessage("Xóa sản phẩm thành công");
        _onLoadData();
      });
    })
  };
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
