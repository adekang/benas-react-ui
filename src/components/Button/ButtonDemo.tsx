import React from 'react';
import Button from './button';

function ButtonDemo() {
  return (
    <div>
      <h1>Button组件</h1>
      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType="primary" size="lg">Hello</Button>
      <Button btnType="default" size="lg">Hello</Button>
      <Button btnType="danger" size="lg">Hello</Button>
      <Button btnType="primary">Hello</Button>
      <Button btnType="default">Hello</Button>
      <Button btnType="danger">Hello</Button>
      <Button btnType="primary" size="sm">Hello</Button>
      <Button btnType="default" size="sm">Hello</Button>
      <Button btnType="danger" size="sm">Hello</Button>
      <Button btnType="link" size="lg" href={'www.baidu.com'}>Hello</Button>
      <Button btnType="link" href={'www.baidu.com'}>Hello</Button>
      <Button btnType="link" size="sm" href={'www.baidu.com'} target="_blank">Hello</Button>
      <Button btnType="link" size="sm" href={'www.baidu.com'} disabled>Hello</Button>
    </div>
  );
}

export default ButtonDemo;
