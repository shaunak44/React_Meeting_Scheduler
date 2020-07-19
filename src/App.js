import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {AddMeetingForm, export_list} from './components/greet'
//import FetchData from './components/Meeting'
import MeetingEle from './components/Meeting'
import {BrowserRouter, Route} from "react-router-dom"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route path="/" exact component={MeetingEle}/>
        <Route path="/Greet" exact component={AddMeetingForm}/>
      </BrowserRouter>
  );
}
}

export default App;
