import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Message, Button, Divider } from 'semantic-ui-react'
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
      })
    }
  }

  displayFavorites = () => {
    let { favorites } = this.state
    if( favorites.length > 0 ){
      return favorites.map( ( loc ) => {
        return ( <Favorite {...fav} /> )
      })
    } else {
      return (
        <Message>
          <Message.Header>
            Favorites Not Set
          </Message.Header>
          <Divider />
          <p>
            Please set a favorite<br />using the buttons below.
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
              { this.displayFavorites() }
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
  return { favorites: state.favorites }
}

export default connect(mapStateToProps)(Favorites)
