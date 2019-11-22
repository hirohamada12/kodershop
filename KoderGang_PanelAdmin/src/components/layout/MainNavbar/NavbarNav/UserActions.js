import React from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
} from "shards-react";
import Constants from "../../../../common/Constants";
import {Cookies} from "react-cookie";

const cookie = new Cookies();
export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      userData: []
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.setState({
      userData: JSON.parse(localStorage.getItem(Constants.USER_DATA))
    })
  }

  componentDidMount() {
    console.log(this.state.userData)
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  signOut() {
    cookie.remove(Constants.TOKEN_LOGGED);
    cookie.remove(Constants.PERMISSION_KEY);
    window.open("/", "_self");
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/1.jpg")}
            alt="User Avatar"
          />{" "}
          <span
            className="d-none d-md-inline-block">{this.state.userData.fullname}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Thông tin
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Sửa Thông Tin
          </DropdownItem>
          {/*<DropdownItem tag={Link} to="file-manager-list">*/}
          {/*  <i className="material-icons">&#xE2C7;</i> Files*/}
          {/*</DropdownItem>*/}
          {/*<DropdownItem tag={Link} to="transaction-history">*/}
          {/*  <i className="material-icons">&#xE896;</i> Transactions*/}
          {/*</DropdownItem>*/}
          <DropdownItem divider/>
          <DropdownItem onClick={this.signOut} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
