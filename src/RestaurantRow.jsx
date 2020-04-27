import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const RestaurantRow = props => (
  <Table.Row>
    <Table.Cell>{props.vehicle["Restaurant ID"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Restaurant Name"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Cuisines"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Average Cost for two"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Currency"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Has Table booking"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Has Online delivery"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Aggregate rating"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Rating color"]}</Table.Cell>
    <Table.Cell>{props.vehicle["Votes"]}</Table.Cell>
  </Table.Row>
);

RestaurantRow.propTypes = {
  vehicle: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};
