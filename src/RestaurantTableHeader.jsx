import { Table } from 'semantic-ui-react';
import React from 'react';

export function RestaurantTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Restaurant ID' ? props.direction : null}
          onClick={() => props.handleSort('Restaurant ID')}
        >
          #
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'Restaurant Name' ? props.direction : null}
          onClick={() => props.handleSort('Restaurant Name')}
        >
          Name
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'Cuisines' ? props.direction : null}
          onClick={() => props.handleSort('Cuisines')}
        >
          Cuisines
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Average Cost for two' ? props.direction : null}
          onClick={() => props.handleSort('Average Cost for two')}
        >
          Cost for 2
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Currency' ? props.direction : null}
          onClick={() => props.handleSort('Currency')}
        >
          Currency
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Has Table booking' ? props.direction : null}
          onClick={() => props.handleSort('Has Table booking')}
        >
          Table Reservation
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Has Online delivery' ? props.direction : null}
          onClick={() => props.handleSort('Has Online delivery')}
        >
          Online Delivery
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Aggregate rating' ? props.direction : null}
          onClick={() => props.handleSort('Aggregate rating')}
        >
          Rating
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Rating text' ? props.direction : null}
          onClick={() => props.handleSort('Rating text')}
        >
          Reviews
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'Votes' ? props.direction : null}
          onClick={() => props.handleSort('Votes')}
        >
          Votes
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
