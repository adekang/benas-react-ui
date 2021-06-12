import React from 'react';
import './styles/index.scss';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href={'www.baidu.com'}>Hello</Button>
    </div>
  );
}

export default App;
