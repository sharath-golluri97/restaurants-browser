import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

import { RestaurantPageSizeSelect } from './RestaurantPageSizeSelect.jsx';
import { RestaurantRow } from './RestaurantRow.jsx';
import { RestaurantTableHeader } from './RestaurantTableHeader.jsx';

export const RestaurantTable = props => {
  if (!props.restaurants) {
    return <React.Fragment />;
  }
  const restaurantRows = props.restaurants.map((restaurant, index) => (
    <RestaurantRow key={index} restaurant={restaurant} addFavorite={props.addFavorite} />
  ));
  return (
    <React.Fragment>
      <RestaurantPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable>
        <RestaurantTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>{restaurantRows}</Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

RestaurantTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
