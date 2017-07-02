import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class Favorite extends Component {

  render(){
    return (
      <Segment basic fluid>
        {this.props.favorite}
      </Segment>
    )
  }
}

export default Favorite
