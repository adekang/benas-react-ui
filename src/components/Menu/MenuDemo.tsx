import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

function ButtonDemo() {
  return (
    <div>
      <h1>Menu组件</h1>
      <Menu defaultIndex="0" defaultOpenSubMenus={['3']} mode={'vertical'}>
        <MenuItem>
          cool menu
        </MenuItem>
        <MenuItem>
          cool menu
        </MenuItem>
        <MenuItem>
          cool menu
        </MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem>
            cool menu
          </MenuItem>
          <MenuItem>
            cool menu
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default ButtonDemo;
