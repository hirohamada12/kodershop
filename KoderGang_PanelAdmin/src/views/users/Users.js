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
import AddUser from "./AddUser";

const Users = (props) => {
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
      maxWidth: 150,
      Header: 'Mã',
      accessor: 'userCode',
    },
    {
      minWidth: 120,
      Header: 'Tên đăng nhập',
      accessor: 'userName',
    },
    {
      minWidth: 150,
      Header: 'Tên người dùng',
      accessor: 'fullName',
    },
    {
      Header: 'Quyền',
      accessor: 'role',
    },
    {
      Header: 'Mô tả',
      accessor: 'description',
    },
    {
      Header: 'Ngày tạo',
      accessor: 'createDate',
      show: false
    },
    {
      Header: 'Lần cuối đăng nhập',
      accessor: 'lastLogin',
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
    showConfirm('Bạn có muốn xóa người dùng này không?', () => {
      showMessage("Xóa sản phẩm thành công")
    })
  };
  const onInsert = () => {
    showContent(<AddUser/>, async () => {
      await hideModalContent();
      showMessage("Lưu người dùng thành công")
    }, 'Thêm mới người dùng')
  };
  const onEdit = (data) => {
    showContent(<AddUser data={data}/>, async () => {
      await hideModalContent();
      showMessage("Lưu sản phẩm thành công")
    }, 'Sửa người dùng')
  };
  const dataProduct = [
    {
      id: 1,
      userName: "longld12",
      fullName: "Lê Đức Long",
      userCode: "LONGLD12",
      role: 'ADMIN',
      description: 'Nhân Viên Cửa Hàng',
      createTime: "30/10/2019",
      lastLogin: "30/10/2019 23:00:00",
      status: 'Active',
    },
    {
      id: 2,
      userName: "anhvtn",
      fullName: "Võ Tá Nhật Anh",
      userCode: "ANHVTN11",
      role: 'ADMIN',
      description: 'Nhân Viên Cửa Hàng',
      createTime: "30/10/2019",
      lastLogin: "30/10/2019 13:00:00",
      status: 'Active',
    },
    {
      id: 3,
      userName: "hiepnh12",
      fullName: "Nguyễn Hoàng Hiệp",
      userCode: "HIEPNH12",
      role: 'ADMIN',
      description: 'Nhân Viên Cửa Hàng',
      createTime: "30/10/2019",
      lastLogin: "30/10/2019 6:00:00",
      status: 'Active',
    },
  ];
  return (
    <Container fluid style={{backgroundColor: '#FFF'}}
               className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-12">
        <PageTitle style={{textAlign: 'center', marginTop: 20}} sm="12"
                   subtitle="Người Dùng"/>
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

export default Users;
