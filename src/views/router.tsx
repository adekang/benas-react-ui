import React from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ButtonDemo from '../components/Button/ButtonDemo';
import InputDemo from '../components/Input/InputDemo';
import MenuDemo from '../components/Menu/MenuDemo';
import TransitionDemo from '../components/Transition/TransitionDemo';
import IconDemo from '../components/Icon/IconDemo';
import Doc from './Doc';

export default function App() {
  return (
    <Router>
      <div className="beans-wrapper">
        <nav className="beans-nav">
          <ul>
            <li>
              <Link to="/">介绍</Link>
            </li>
            <li>
              <Link to="/menu">Menu组件</Link>
            </li>
            <li>
              <Link to="/button">Button组件</Link>
            </li>
            <li>
              <Link to="/input">Input组件</Link>
            </li>
            <li>
              <Link to="/transition">transition组件</Link>
            </li>
            <li>
              <Link to="/icon">Icon组件</Link>
            </li>

          </ul>
        </nav>
        <div className="beans-container">
          <Switch>
            <Route path="/menu">
              <MenuDemo/>
            </Route>
            <Route path="/button">
              <ButtonDemo/>
            </Route>
            <Route path="/input">
              <InputDemo/>
            </Route>
            <Route path="/icon">
              <IconDemo/>
            </Route>
            <Route path="/transition">
              <TransitionDemo/>
            </Route>
            <Route path="/">
              <Doc/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
