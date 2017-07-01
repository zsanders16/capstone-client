import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import CurrentConditions from './CurrentConditions'

class WeatherStation extends Component {

  render(){
    return (
      <Grid.Row columns={16}>
        <Grid.Column width={12} className='ws_area'>
          <CurrentConditions />
        </Grid.Column>
        <Grid.Column width={4} className='ws_area'>
          <Segment>
            Command Central
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default WeatherStation
