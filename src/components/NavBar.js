import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Input, Dropdown } from 'semantic-ui-react'

// CSS
import './NavBar.css'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <Menu pointing fluid >
        <Menu.Item header>Weather Station</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='historical' active={activeItem === 'historical'} onClick={this.handleItemClick} />
        <Menu.Item name='local' active={activeItem === 'local'} onClick={this.handleItemClick} />
          <Dropdown item text='Maps'>
            <Dropdown.Menu>
              <Dropdown.Item>Barometric</Dropdown.Item>
              <Dropdown.Item>Radar</Dropdown.Item>
              <Dropdown.Item>Regional Satallite</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Menu.Item position='right' className='nb-border-right'>
          <Input
            action={{ type: 'submit', content: 'Go' }}
            placeholder='Search...'
            onSubmit={this.handleSearch} />
        </Menu.Item>
        <Menu.Item name='settings' as={ Link } to='/settings' />
        <Menu.Item name='login' as={ Link } to='/auth' />
      </Menu>
    )
  }
}

export default NavBar
