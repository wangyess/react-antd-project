import React, { Component } from 'react';
import './index.css'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'home',
    }
  }

  handleClick = (e) => {

    this.setState({
      current: e.key,
    });

    switch (e.key) {
      case 'login':
        this.props.router.history.push('/login')
        return
      case 'home':
        this.props.router.history.push('/home')
        return
      case 'template':
        this.props.router.history.push('/template')
        return
      default:
        return
    }
  }

  render() {
    return (
      <div>
        <Menu
          mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          theme="dark"
        >
          <Menu.Item key="home">
            <Icon type="home" />Home
          </Menu.Item>
          <Menu.Item key="template">
            <Icon type="appstore" />Template
          </Menu.Item>
          <SubMenu key="setting" title={<span className="submenu-title-wrapper">
            <Icon type="setting" />Setting</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <Menu.Item key="about">
            <Icon type="link" />About
          </Menu.Item>
          <Menu.Item key="login" style={{ float: 'right' }}>
            <Icon type="user" />Login
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Header;