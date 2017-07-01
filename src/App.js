import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

// App specific Elements
import WeatherStation from './components/WeatherStation'
import NoMatch from './NoMatch'

class App extends Component {
  render() {
    return (
      <Grid className='container'>
        <Switch>
          <Route exact path='/' component={ WeatherStation } />
          <Route component={ NoMatch } />
        </Switch>
      </Grid>
    )
  }
}

export default App;
