import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineCard from './Components/TimelineCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TimelineCard
            name="An Entry"
            description="Yeah Some Stuff Goes Here"  
          />
          <TimelineCard
            name="An Entry"
            description="Yeah Some Stuff Goes Here"  
          />
          <TimelineCard
            name="An Entry"
            description="Yeah Some Stuff Goes Here"  
          />
          </div>
      </div>
    );
  }
}

export default App;
