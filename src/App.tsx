import React from 'react';
import './styles/index.scss';
import ButtonDemo from './components/Button/ButtonDemo';
import MenuDemo from './components/Menu/MenuDemo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee}/>
      <ButtonDemo/>
      <MenuDemo/>
    </div>
  );
}

export default App;
