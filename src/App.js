import React, { Component } from 'react';
import './App.css';
import TimelineCard from './Components/TimelineCard';
import TimelineData from './Data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {TimelineData.map(function(obj) {
            return (
              <TimelineCard
                {...obj}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
