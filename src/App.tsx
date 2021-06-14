import React, {useState} from 'react';
import './styles/index.scss';
import ButtonDemo from './components/Button/ButtonDemo';
import MenuDemo from './components/Menu/MenuDemo';
import IconDemo from './components/Icon/IconDemo';

import Button from './components/Button/button';
import Transition from './components/Transition/transition';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <ButtonDemo/>
      <MenuDemo/>
      <IconDemo/>
      <Button size="lg" onClick={() => {setShow(!show);}}>toggle</Button>
      <Transition in={show} timeout={250} animation={'zoom-in-top'} wrapper={true}>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </Transition>
    </div>
  );
}

export default App;
