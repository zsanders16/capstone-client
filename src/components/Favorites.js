import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Message, Button, Divider } from 'semantic-ui-react'
import Location from './Location'
import { locations } from '../actions/locations.js'

class Favorites extends Component {
  state = {
    locations: {
      city: null,
      state: null,
      country: null,
      preferences: {
        settings: {}
      }
    },
  }

  componentDidMount = () => {
    let { dispatch } = this.props
    // Set initial Locations
    dispatch(locations())
    // Place locations in local state
    if( this.props.locations.length > 0 ) {
      this.setState({
        locations: this.props.locations
      })
    }
  }

  displayLocations = () => {
    let { locations } = this.state
    if( locations.length > 0 ){
      return locations.map( ( loc ) => {
        return ( <Location {...loc} /> )
      })
    } else {
      return (
        <Message>
          <Message.Header>
            Locations Not Set
          </Message.Header>
          <Divider />
          <p>
            Please set a location<br />using the buttons below.
          </p>
        </Message>
      )
    }
  }

  render(){
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment className='fav-scroll'>
              { this.displayLocations() }
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button.Group size='mini'>
              <Button icon='add' />
              <Button icon='remove' />
              <Button icon='edit' />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  // TODO: this is just a prototype
  return { locations: state.locations }
}

export default connect(mapStateToProps)(Favorites)
