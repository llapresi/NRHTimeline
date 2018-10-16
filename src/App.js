import React, { Component } from 'react';
import './App.css';
import TimelineCard from './Components/TimelineCard';
import TimelineData from './Data';
import NonDatedData from './NonDatedData';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dated: true,
    };
  }

  render() {
    const { dated } = this.state;
    return (
      <div className="App">
        <AppBar color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              NRH Timeline
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Button color="inherit" onClick={() => this.setState({dated: true})}>Show Dated</Button>
              <Button color="inherit" onClick={() => this.setState({dated: false})}>Show Non Dated</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="App-header">
          {dated === true &&
            <React.Fragment>
              {TimelineData.map(function(obj) {
                return (
                  <TimelineCard
                    {...obj}
                  />
                )
              })}
            </React.Fragment>
          }
          {dated === false &&
            <React.Fragment>
              {NonDatedData.map(function(obj) {
                return (
                  <TimelineCard
                    {...obj}
                  />
                )
              })}
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
