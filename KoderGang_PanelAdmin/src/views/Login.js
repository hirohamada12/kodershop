import React, {Component} from "react";
import {
  CardGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import {Button, Card, CardBody, Col, Container, Row} from "shards-react";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";
import PropTypes from "prop-types";
import {encryptData} from "../common/CryptoUtil";
import bg from '../assets/images/bg_login.jpg'
import {showError} from "../components/components-overview/Modal";
import {Cookies} from "react-cookie";

const cookie = new Cookies();

class Login extends Component {
  adUser = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate() {
    if (this.adUser.username === undefined || this.adUser.username.trim() === '') {
      showError("Bạn phải nhập tên đăng nhập");
      return false;
    }
    if (this.adUser.pass === undefined || this.adUser.pass.trim() === '') {
      showError('Bạn phải nhập mật khẩu');
      return false;
    }
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.adUser = {
      username: data.get("username"),
      pass: data.get("pass")
    };
    if (!this.validate()) {
      return;
    }
    RestAPIHelper.login(result => {
      let d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
      cookie.set(Constants.TOKEN_LOGGED, result.data.token, {
        path: "/",
        expires: d
      });
      cookie.set(Constants.PERMISSION_KEY, encryptData(result.data.permission.privilege), {
        path: "/",
        expires: d
      });
      localStorage.setItem(Constants.USER_DATA, JSON.stringify(result.data));
      window.open("/", "_self");
    }, this.adUser);
  }

  render() {
    return (
      <div
        className={'Login-component'}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container>
          <Row style={{justifyContent: 'center'}}>
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Admin Chào Bạn</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-user"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder={'Tên đăng nhập'}
                          autoComplete="username"
                          name="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-lock"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder={'Mật khẩu'}
                          autoComplete="current-password"
                          name="pass"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" type="submit">
                            Đăng nhập
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white py-5 d-md-down-none"
                  style={{
                    width: "44%",
                    backgroundColor: "rgb(0,0,0,0.4)"
                  }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>KoderGang</h2>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};
export default Login;
