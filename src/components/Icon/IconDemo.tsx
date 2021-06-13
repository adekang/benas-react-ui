import React from 'react';
import Icon from './icon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function IconDemo() {
  return (
    <div>
      <h1>Icon组件</h1>
      <Icon icon="coffee" theme="danger" size="10x"/>
    </div>
  );
}

export default IconDemo;
