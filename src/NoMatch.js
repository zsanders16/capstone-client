import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'

import './NoMatch.css'

const NoMatch = () => {
  return (
    <Grid.Row columns={16}>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column stretched width={8}>
        <Segment className='no-match'>
          <Header as='h3'>No Route Found</Header>
          <p>
            No routes were found for the link you clicked.
            <br />
            Please return to the <Link to='/'>Weather Application</Link>
        </p>
      </Segment>
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid.Row>
  )
}

export default NoMatch
