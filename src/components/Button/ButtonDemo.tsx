import React from 'react';
import Button, {ButtonSize, ButtonType} from './button';

function ButtonDemo() {
  return (
    <div>
      <h1>Button组件</h1>
      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Primary}>Hello</Button>
      <Button btnType={ButtonType.Default}>Hello</Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Large} href={'www.baidu.com'}>Hello</Button>
      <Button btnType={ButtonType.Link} href={'www.baidu.com'}>Hello</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href={'www.baidu.com'} target="_blank">Hello</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href={'www.baidu.com'} disabled>Hello</Button>
    </div>
  );
}

export default ButtonDemo;
