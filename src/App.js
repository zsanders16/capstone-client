import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Switch>
          <Route exact path='/' component={ WeatherStation } />
          <Route component={ NoMatch } />
        </Switch>
      </Grid>
    )
  }
}

export default App;
