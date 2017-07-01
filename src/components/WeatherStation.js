import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import CurrentConditions from './CurrentConditions';
import Compare from './Compare';

class WeatherStation extends Component {

  showHome = () => (
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

  render(){
    let { navbarItem } = this.props
    switch (navbarItem) {
        case 'home':
          return this.showHome();
        case 'historical':
          return <Compare />
        default:
          return <h1>Component has not been made yet</h1>
    }

  }
}

const mapStateToProps = (state) => {
  return {navbarItem: state.navbar};
}

export default connect(mapStateToProps)(WeatherStation);
