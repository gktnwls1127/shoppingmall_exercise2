import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="sns">
      <a href="/sns">#OOTD</a>
    </Menu.Item>
    <Menu.Item key="store">
      <a href="/">STORE</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu