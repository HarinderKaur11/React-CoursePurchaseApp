import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

    var courses=[
      {name: 'Complete frontend development course', price: 150},
      {name: 'Learn React with Redux', price: 200},
      {name: 'Full stack development with MEAN stack', price: 205},
      {name: 'Advanced Javascript with ES6', price: 90},
      {name: 'React Native fundamentals', price: 115}
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Sales page</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
