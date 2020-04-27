import React, { Component } from 'react';
import { Button, Container, Header, Icon, Menu } from 'semantic-ui-react';

import RestaurantList from './RestaurantList';

export class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item>
            <Header> Restaurants browser </Header>
          </Menu.Item>
          <Menu.Item position="right">
          </Menu.Item>
        </Menu>

        <RestaurantList />
      </Container>
    );
  }
}
