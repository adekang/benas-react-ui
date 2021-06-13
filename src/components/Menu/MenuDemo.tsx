import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';

function ButtonDemo() {
  return (
    <div>
      <h1>Menu组件</h1>
      <Menu defaultIndex={0}>
        <MenuItem index={0}>
          cool menu
        </MenuItem>
        <MenuItem index={1}>
          cool menu
        </MenuItem>
        <MenuItem index={2}>
          cool menu
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ButtonDemo;
