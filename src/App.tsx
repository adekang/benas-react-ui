import React from 'react';
import './styles/index.scss';
import ButtonDemo from './components/Button/ButtonDemo';
import MenuDemo from './components/Menu/MenuDemo';
import IconDemo from './components/Icon/IconDemo';
import TransitionDemo from './components/Transition/TransitionDemo';
import InputDemo from './components/Input/InputDemo';

function App() {
  return (
    <div>
      <ButtonDemo/>
      <MenuDemo/>
      <IconDemo/>
      <TransitionDemo/>
      <InputDemo/>
    </div>
  );
}

export default App;
