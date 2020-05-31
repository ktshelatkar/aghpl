import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import "../src/sass/main.scss";
import { Row, Col, Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import SignUp from './pages/signup';
import Login from './pages/login';
import PasswordResetOne from './pages/passwordresetone';
import PasswordResetTwo from './pages/passwordresettwo';
import Appointments from './pages/appointments';
import AddEventType from './pages/addeventtype';
import ScheduleMetting from './pages/schedulemetting';
import SelectDateTime from './pages/schedulemetting/slectdatetime';
import ScheduleDetail from './pages/schedulemetting/scheduledetail';
import ScheduleConfirm from './pages/schedulemetting/scheduleconfirm';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SignUp}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/passwordresetone' component={PasswordResetOne}></Route>
          <Route exact path='/passwordresettwo' component={PasswordResetTwo}></Route>
          <Route exact path='/appointments' component={Appointments}></Route>
          <Route exact path='/addeventtype' component={AddEventType}></Route>
          <Route exact path='/schedulemetting' component={ScheduleMetting}></Route>
          <Route exact path='/slectdatetime' component={SelectDateTime}></Route>
          <Route exact path='/scheduledetail' component={ScheduleDetail}></Route>
          <Route exact path='/scheduleconfirm' component={ScheduleConfirm}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
