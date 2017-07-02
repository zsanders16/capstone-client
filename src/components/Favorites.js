import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Message, Button, Divider } from 'semantic-ui-react'
<<<<<<< HEAD
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
=======
import Favorite from './Favorite'
import { favorites } from '../actions/favorites'

class Favorites extends Component {
  state = { favorites: [] }

  componentDidMount = () => {
    let { dispatch } = this.props
    // Set initial Favorites
    dispatch(favorites())
    // Place locations in local state
    if( this.props.favorites ) {
      this.setState({ ...this.props.favorites
>>>>>>> brennick/favorites_element
      })
    }
  }

<<<<<<< HEAD
  displayLocations = () => {
    let { locations } = this.state
    if( locations.length > 0 ){
      return locations.map( ( loc ) => {
        return ( <Location {...loc} /> )
=======
  displayFavorites = () => {
    let { favorites } = this.state
    if( favorites.length > 0 ){
      return favorites.map( ( loc ) => {
        return ( <Favorite {...fav} /> )
>>>>>>> brennick/favorites_element
      })
    } else {
      return (
        <Message>
          <Message.Header>
<<<<<<< HEAD
            Locations Not Set
          </Message.Header>
          <Divider />
          <p>
            Please set a location<br />using the buttons below.
=======
            Favorites Not Set
          </Message.Header>
          <Divider />
          <p>
            Please set a favorite<br />using the buttons below.
>>>>>>> brennick/favorites_element
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
<<<<<<< HEAD
              { this.displayLocations() }
=======
              { this.displayFavorites() }
>>>>>>> brennick/favorites_element
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
<<<<<<< HEAD
  return { locations: state.locations }
=======
  return { favorites: state.favorites }
>>>>>>> brennick/favorites_element
}

export default connect(mapStateToProps)(Favorites)
