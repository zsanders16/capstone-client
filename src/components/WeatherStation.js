import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class WeatherStation extends Component {

  render(){
    return (
      <Grid.Row columns={16}>
        <Grid.Column width={12} className='ws_area'>
          <Segment>
            WeatherStation
          </Segment>
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
