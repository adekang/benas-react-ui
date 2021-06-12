import React from 'react';
import './styles/index.scss';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div>
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

export default App;
